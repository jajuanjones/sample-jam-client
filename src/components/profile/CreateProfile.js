import { Button, Checkbox, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React, {useEffect, useRef, useState} from "react"
import { useHistory, useParams, Link } from "react-router-dom"
import { createProfile, getTagsForProfile } from "./ProfileManager"

export const CreateProfile = () => {
    const {userId} = useParams()
    const [listTags, setListTags] = useState([])
    const [profile, setProfile] = useState({
        bio: "",
        profile_img: "",
        tags: [],
        user: userId
    })
    const history = useHistory()

    useEffect(()=>{
        getTagsForProfile().then(data=>setListTags(data))
    },[])
    
    const handleNewProfile = (e) => {
        e.preventDefault()

        const newProfile = {
            bio: profile.bio,
            profile_img: profile.profile_img,
            tags: profile.tags
        }

        createProfile(newProfile).then(history.push(`/profiles/your-profile`))
    }

    const handleControlledInput = (e) => {
        const newProfile = Object.assign({}, profile)
        if(e.target.name === 'tags') {
            if (e.target.checked) {
                newProfile[e.target.name].push(parseInt(e.target.value))
            }
            else {
                newProfile[e.target.name] = newProfile[e.target.name].filter(tag=>{
                    return tag !== parseInt(e.target.value)})
            }
        }
        else {
            newProfile[e.target.name] = e.target.value
        }
        setProfile(newProfile)
    }

    return(
        <>
            {/* later we will add a way to upload images */}
            <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    mt: "2rem",
                    width: "100%"
                }}>
                <Typography variant="h5" sx={{fontWeight: "bold"}}>Complete your profile</Typography>
                <Box sx={{}}>
                    <TextField
                        margin="normal"
                        size="small"
                        id="bio"
                        fullWidth
                        multiline
                        rows={5}
                        label="Tell us about you..."
                        name="bio"
                        value={profile.bio}
                        onChange={handleControlledInput}
                        autoFocus
                    />
                </Box>
                <Box>
                    <Typography variant="subtitle1">Select your tag(s)</Typography>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)"
                    }}>
                        {
                            listTags.map(tag=>{
                                return <>
                                <Box>
                                    <Typography variant="body2" sx={{fontSize: 12}}>{tag.label}</Typography>
                                    <Checkbox
                                    value={tag.id}
                                    onChange={handleControlledInput}
                                    name="tags"
                                    checked={
                                        profile.tags.includes(tag.id)
                                    }/>
                                </Box>
                                </>
                            })
                        }
                    </Box>
                </Box>
                <Box>
                    <Link to="/forums" onClick={(e)=>handleNewProfile(e)}>
                        <Typography>
                            Want to skip this step? Visit the forum.
                        </Typography>
                    </Link>
                    <Button
                    sx={{
                        width: "7rem",
                        height: "2rem",
                        color: "white",
                        backgroundColor: "rgb(22, 211, 22)",
                        ":hover": {
                            backgroundColor: "rgb(8, 189, 8)"
                        }
                    }}
                    onClick={(e)=>{
                        handleNewProfile(e)
                    }}>
                        <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                            Submit
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}
