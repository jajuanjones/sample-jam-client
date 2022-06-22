import { Button, Checkbox, TextField, Typography } from "@mui/material"
import { useHistory } from "react-router-dom"
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { useEffect, useState } from "react"
import { uploadSong } from "./MusicManager"
import { Box } from "@mui/system"
import { getAllGenres } from "../genre/GenreManager"


export const UploadMusic = ({profile}) => {
    const [music, setMusic] = useState({
        title: "",
        song: "",
        genres: []
    })
    const [listGenres, setListGenres] = useState([])
    const history = useHistory()

    useEffect(()=>{
        getAllGenres().then(setListGenres)
    },[])

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    const createMusicString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);
            // Update a component state variable to the value of base64ImageString
            let copy = {...music}
            copy.song = base64ImageString
            setMusic(copy)
        });
    }

    const handleCreateMusic = (e) => {
        e.preventDefault()

        const newMusic = {
            title: music.title,
            song: music.song,
            genres: music.genres
        }

        uploadSong(newMusic).then(()=>history.push("/profiles/your-profile"))
    }

    const handleControlledInput = (e) => {
        const newSong = Object.assign({}, music)
        if(e.target.name === 'genres') {
            if (e.target.checked) {
                newSong[e.target.name].push(parseInt(e.target.value))
            }
            else {
                newSong[e.target.name] = newSong[e.target.name].filter(genre=>{
                    return genre !== parseInt(e.target.value)})
            }
        }
        else {
            newSong[e.target.name] = e.target.value
        }
        setMusic(newSong)
    }

    return(
        <>
            <Box sx={{display: "flex", flexDirection: "column", textAlign: "center", margin: "0 auto", width: "75%"}}>
                <Typography variant="h5" sx={{fontWeight: "bold"}}>Upload your music</Typography>
                <Box>
                    <Button
                    variant="contained"
                    component="label"
                    sx={{
                        mt: 5,
                        borderRadius: "0",
                        backgroundColor: "rgb(22, 211, 22)",
                        ":hover": {
                            backgroundColor: "rgb(8, 189, 8)"
                        }
                    }}>
                        <MusicNoteIcon fontSize="small"/>
                        <Typography variant="body2">choose a file to upload</Typography>
                        <input type="file" hidden onChange={createMusicString}/>
                        <input type="hidden" name="profile_id" value={music.id}/>
                    </Button>
                </Box>
                <Box>
                <Box sx={{width: "70%", margin: "5rem auto"}}>
                        <TextField
                            margin="normal"
                            size="small"
                            id="title"
                            required
                            fullWidth
                            label="Title"
                            name="title"
                            value={music.title}
                            onChange={handleControlledInput}
                            autoFocus
                        />
                    </Box>
                    <Box sx={{mt: 3}}>
                        <Typography variant="subtitle1">Select your genre(s)</Typography>
                        <Box sx={{textAlign: "center"}}>
                            <Box sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                "justify-items": "center"
                            }}>
                                {
                                    listGenres.map(genre=>{
                                        return <>
                                        <Box key={`genre--${genre.id}`}>
                                            <Typography variant="body2" sx={{fontSize: 12}}>{genre.label}</Typography>
                                            <Checkbox
                                            value={genre.id}
                                            onChange={handleControlledInput}
                                            name="genres"
                                           />
                                        </Box>
                                        </>
                                    })
                                }
                            </Box>
                        </Box>
                        <Box>
                            <Button onClick={(e)=>handleCreateMusic(e)}>
                                <Typography variant="body2">Upload</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
