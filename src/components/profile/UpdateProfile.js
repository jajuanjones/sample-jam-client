import { Button, Checkbox, TextField, Typography, Avatar, Grid } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Settings } from "../utils/Settings"
import { NotifyDeleteProfile } from "./DeleteProfile"
import { editProfile, editUser, getTagsForProfile } from "./ProfileManager"
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: "70%",
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    "z-index": 1,
    overflow: "auto"
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

        const editedUser = {
            username: profile.user.username,
            first_name: profile.user.first_name,
            last_name: profile.user.last_name,
            email: profile.user.email,
            id: profile.user.id
        }

        editProfile(editedProfile)
        .then(editUser(editedUser))
        .then(()=>{
            setShowEditModal(false)
            refreshProfilePage()
        })
    }

    const getBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }
    
    const createProfileImageString = (event) => {
        getBase64(event.target.files[0], (base64ImageString) => {
            console.log("Base64 of file is", base64ImageString);
            // Update a component state variable to the value of base64ImageString
            let copy = {...profile}
            copy.profile_img = base64ImageString
            setMyProfile(copy)
        });
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
                <Box>
                    <Box sx={{textAlign: "center"}}>
                        <Box>
                            {
                                profile.profile_img != null
                                    ?
                                        <Box>
                                            <Avatar src={`${profile.profile_img}`}
                                                sx={{width: 250, height: 250, margin: "0 auto"}}/>
                                            <Box>
                                                <Button
                                                variant="contained"
                                                component="label"
                                                sx={{
                                                    borderRadius: "0",
                                                    backgroundColor: "rgb(207, 207, 207)",
                                                    ":hover": {
                                                        backgroundColor: "rgb(168, 168, 168)"
                                                    }
                                                }}>
                                                    <CameraAltOutlinedIcon fontSize="small" sx={{paddingRight: 0.5, color: "black"}}/>
                                                    <Typography sx={{color: "black", fontSize: 13}}>
                                                        Upload image
                                                        </Typography>
                                                    <input type="file" hidden onChange={createProfileImageString}/>
                                                    <input type="hidden" name="profile_id" value={profile.id}/>
                                                </Button>
                                            </Box>
                                        </Box>
                                    :
                                        <Box>
                                            <Avatar sx={{width: 250, height: 250, margin: "0 auto"}}/>
                                            <Box>
                                                <Button
                                                variant="contained"
                                                component="label"
                                                sx={{
                                                    borderRadius: "0",
                                                    backgroundColor: "rgb(207, 207, 207)",
                                                    ":hover": {
                                                        backgroundColor: "rgb(168, 168, 168)"
                                                    }
                                                }}>
                                                    <CameraAltOutlinedIcon fontSize="small" sx={{paddingRight: 0.5, color: "black"}}/>
                                                    <Typography sx={{color: "black", fontSize: 13}}>
                                                        Upload image
                                                        </Typography>
                                                    <input type="file" hidden onChange={createProfileImageString}/>
                                                    <input type="hidden" name="profile_id" value={profile.id}/>
                                                </Button>
                                            </Box>
                                        </Box>
                            }
                        </Box>
                    </Box>
                    <Grid container spacing={2} sx={{mt: 1}}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="first_name"
                            fullWidth
                            size="small"
                            id="first_name"
                            label="First Name"
                            value={profile.user.first_name}
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            fullWidth
                            size="small"
                            id="last_name"
                            label="Last Name"
                            value={profile.user.last_name}
                            name="last_name"
                            autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            fullWidth
                            size="small"
                            id="username"
                            label="Username"
                            value={profile.user.username}
                            name="username"
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            fullWidth
                            size="small"
                            id="email"
                            label="Email Address"
                            value={profile.user.email}
                            name="email"
                            autoComplete="email"
                            />
                        </Grid>
                    </Grid>
                    <Box sx={{}}>
                        <TextField
                            margin="normal"
                            size="small"
                            id="bio"
                            fullWidth
                            multiline
                            rows={3}
                            label="Tell us about you..."
                            name="bio"
                            value={profile.bio}
                            onChange={handleControlledInput}
                            autoFocus
                        />
                    </Box>
                    <Box>
                        <Typography variant="subtitle1">Select your tag(s)</Typography>
                        <Box sx={{textAlign: "center"}}>
                            <Box sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                "justify-items": "center"
                            }}>
                                {
                                    listTags.map(tag=>{
                                        return <>
                                        <Box key={`tag--${tag.id}`}>
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
                    </Box>
                    <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            mt: "3rem"
                        }}>
                        <Button
                        sx={{
                            width: "5rem",
                            height: "2rem",
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
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end"
                        }}>
                            <Button
                            sx={{
                                width: "5rem",
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
                            <Button
                            sx={{
                                width: "5rem",
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
            </Box>
        </>
    )
}