import { Button, Checkbox, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { NotifyDeleteProfile } from "./DeleteProfile"
import { editProfile, getTagsForProfile } from "./ProfileManager"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: "fit-content",
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export const UpdateProfileForm= ({setShowEditModal, refreshProfilePage, profile, setMyProfile}) => {
    const [listTags, setListTags] = useState([])
    const [showAlert, setShowAlert] = useState(0)

    useEffect(()=>{
        getTagsForProfile().then(setListTags)
        profile.tags = profile.tags.map(t=>t.id)
    },[])

    const handleEditProfile = (e) => {
        e.preventDefault()

        const editedProfile = {
            bio: profile.bio,
            profile_img: profile.profile_img,
            tags: profile.tags,
            id: profile.id
        }

        editProfile(editedProfile).then(()=>{
            setShowEditModal(false)
            refreshProfilePage()
        })
    }

    const handleControlledInput = (e) => {
        const editedProfile = Object.assign({}, profile)
        if(e.target.name === 'tags') {
            if (e.target.checked) {
                editedProfile[e.target.name].push(parseInt(e.target.value))
            }
            else {
                editedProfile[e.target.name] = editedProfile[e.target.name].filter(tag=>{
                    return tag !== parseInt(e.target.value)})
            }
        }
        else {
            editedProfile[e.target.name] = e.target.value
        }
        setMyProfile(editedProfile)
    }

    return(
        <>
            {/* later we will add a way to upload images */}
            {
                showAlert != 0 ? <NotifyDeleteProfile
                    setShowAlert={setShowAlert}
                    showAlert={showAlert}
                    user={profile.user}/>
                : ""
            }
            <Box sx={style}>
                <Typography variant="h5" sx={{fontWeight: "bold"}}>Edit your profile</Typography>
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
                <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end"
                    }}>
                        <Button
                        sx={{
                            width: "7rem",
                            height: "2rem",
                            margin: "0 auto",
                            color: "white",
                            backgroundColor: "rgb(155, 20, 20)",
                            ":hover": {
                                backgroundColor: "rgb(134, 17, 17)"
                            }
                        }}
                        onClick={()=>setShowAlert(profile.id)}>
                            <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                                Delete
                            </Typography>
                        </Button>
                    <Box>
                        <Button
                        sx={{
                            width: "7rem",
                            height: "2rem",
                            margin: "0 auto",
                            color: "white",
                            backgroundColor: "rgb(22, 211, 22)",
                            ":hover": {
                                backgroundColor: "rgb(8, 189, 8)"
                            }
                        }}
                        onClick={(e)=>{
                            setShowEditModal(false)
                            refreshProfilePage()
                        }}>
                            <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                                Cancel
                            </Typography>
                        </Button>
                    </Box>
                    <Box>
                        <Button
                        sx={{
                            width: "7rem",
                            height: "2rem",
                            margin: "0 1rem",
                            color: "white",
                            backgroundColor: "rgb(22, 211, 22)",
                            ":hover": {
                                backgroundColor: "rgb(8, 189, 8)"
                            }
                        }}
                        onClick={(e)=>{
                            handleEditProfile(e)
                        }}>
                            <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                                Save
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}