import { Avatar, Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Post } from "../post/Post";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { UpdateProfileForm } from "./UpdateProfile";
import { Settings } from "../utils/Settings";
import { Music } from "../music/Music";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}


export const Profile = ({listView, myView, profile, refreshProfilePage, setMyProfile}) => {
    const [showEditModal, setShowEditModal] = useState(false)
    const [tabValue, setTabValue] = useState(0)
    const history = useHistory()

    const handleChange = (e, newValue) => {
        setTabValue(newValue)
    }

    const setListViewFalse = () => {
        listView = false
    }

    return(
        <>
            {
                listView && profile
                    ?
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: 250
                        }}>
                            <Box sx={{textAlign: "left"}}>
                                <Link
                                    to={`/profiles/${profile.id}-${profile.user?.username}`}
                                    style={{textDecoration: "none", color: "black"}}
                                    onClick={setListViewFalse}>
                                    {
                                        profile.profile_img != null
                                        ?
                                            <Avatar src={`${profile?.profile_img}`}/>
                                        :   
                                            <Avatar sx={{width: 40, height: 40}}/>
                                    }
                                    <Typography variant="subtitle1">
                                        {profile.user?.username}
                                    </Typography>
                                </Link>
                                {/* <Typography variant="body2" sx={{fontSize: 13}}>
                                    {profile.tags?.map(tag=>{
                                        return <>
                                            {tag.label}{' '}
                                        </>
                                        })}
                                </Typography> */}
                            </Box>
                        </Box>
                    :
                        myView
                            ? 
                                <Box>
                                    {
                                        showEditModal
                                            ?
                                                <UpdateProfileForm
                                                    setShowEditModal={setShowEditModal}
                                                    profile={profile}
                                                    refreshProfilePage={refreshProfilePage}
                                                    setMyProfile={setMyProfile}/>
                                            :
                                            ""
                                    }
                                    <Box sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        
                                    }}>
                                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                                                <Tab label="User Info" {...a11yProps(0)} />
                                                <Tab label="My Posts" {...a11yProps(1)} />
                                                <Tab label="My Music" {...a11yProps(2)} />
                                            </Tabs>
                                        </Box>
                                        <Box>
                                            <TabPanel value={tabValue} index={0}>
                                                <Box sx={{width: "100%"}}>
                                                    <Box sx={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "flex-end"
                                                    }}>
                                                        <Button>
                                                            <EditRoundedIcon fontSize="small" onClick={()=>setShowEditModal(true)}/>
                                                        </Button>
                                                    </Box>
                                                </Box>
                                                <Typography variant="body1" sx={{fontSize: 20}}>
                                                    {profile.user?.username}
                                                </Typography>
                                                <Typography variant="body1" sx={{fontSize: 15}}>
                                                    {profile.user?.first_name} {profile.user?.last_name}
                                                </Typography>
                                                <Typography variant="body1" sx={{fontSize: 15}}>
                                                    {profile.user?.email}
                                                </Typography>
                                                <Typography variant="body1" sx={{fontSize: 15}}>
                                                    {profile.bio}
                                                </Typography>
                                                <Box>                                                
                                                    {
                                                        profile.tags?.map(tag=>{
                                                            return <Typography>
                                                                {tag.label}
                                                            </Typography>
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                        </Box>
                                        <Box>
                                            <TabPanel value={tabValue} index={1}>
                                                {
                                                    profile.posts?.map(post=>{
                                                        return <Box>
                                                                    <Link to={`/forum/posts/${post.id}`}
                                                                        style={{
                                                                            textDecoration: "none",
                                                                            color: "black",
                                                                            ":visited": {
                                                                                color: "black"
                                                                            }
                                                                        }}>
                                                                        <Post listView={false} post={post}/>
                                                                    </Link>
                                                                </Box>
                                                    })
                                                }
                                            </TabPanel>
                                        </Box>
                                        <Box>
                                            <TabPanel value={tabValue} index={2}>
                                                <Box>
                                                    <Button variant="contained"
                                                        onClick={()=>history.push("/upload-your-music")}
                                                        sx={{
                                                            width: "9rem",
                                                            height: "1.5rem",
                                                            backgroundColor: "rgba(196, 97, 209, 0.705)",
                                                            mb: 3
                                                    }}>
                                                        <MusicNoteIcon fontSize="small"/>
                                                        <Typography variant="body2" sx={{fontSize: 12}}>Upload Music</Typography>
                                                    </Button>
                                                </Box>
                                                <Box>
                                                    {
                                                        profile.songs?.map(music=>{
                                                            return <Box key={`music--${music.id}`}>
                                                                        <Music music={music} profile={profile}/>        
                                                                    </Box>
                                                        })
                                                    }
                                                </Box>
                                            </TabPanel>
                                        </Box>
                                    </Box>
                                </Box>
                            :
                            profile ?               
                            <Box>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    
                                }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="User Info" {...a11yProps(0)} />
                                            <Tab label="Posts" {...a11yProps(1)} />
                                            <Tab label="Music" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <Box>
                                        <TabPanel value={tabValue} index={0}>
                                            <Typography>
                                                {profile.user?.username}
                                            </Typography>
                                            <Typography>
                                                {profile.user?.first_name}
                                            </Typography>
                                            <Typography>
                                                {profile.user?.last_name}
                                            </Typography>
                                            <Typography>
                                                {profile.user?.email}
                                            </Typography>
                                            <Typography>
                                                {profile.bio}
                                            </Typography>
                                            {
                                                profile.tags?.map(tag=>{
                                                    return <Typography>
                                                        {tag.label}
                                                    </Typography>
                                                })
                                            }
                                        </TabPanel>
                                    </Box>
                                    <Box>
                                        <TabPanel value={tabValue} index={1}>
                                            {
                                                profile.posts?.map(post=>{
                                                    return <Box>
                                                                <Link to={`/forum/posts/${post.id}`}
                                                                    style={{
                                                                        textDecoration: "none",
                                                                        color: "black",
                                                                        ":visited": {
                                                                            color: "black"
                                                                        }
                                                                    }}>
                                                                    <Post listView={false} post={post}/>
                                                                </Link>
                                                            </Box>
                                                })
                                            }
                                        </TabPanel>
                                    </Box>
                                    <Box>
                                        <TabPanel value={tabValue} index={2}>
                                            {
                                                profile.music?.map(music=>{
                                                    return null
                                                })
                                            }
                                        </TabPanel>
                                    </Box>
                                </Box>
                            </Box>
                            : ""
            }
        </>
    )
}
