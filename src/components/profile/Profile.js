import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Post } from "../post/Post";


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


export const Profile = ({listView, myView, profile}) => {
    const [showModal, setShowModal] = useState(false)
    const [tabValue, setTabValue] = useState(0)

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
                            flexDirection: "row"
                        }}>
                            <Box>
                                <Link
                                    to={`/profiles/${profile.id}-${profile.user?.username}`}
                                    style={{textDecoration: "none", color: "black"}}
                                    onClick={setListViewFalse}>
                                {profile.profile_img != null
                                    ?
                                        profile.profile_img : <Avatar sx={{width: 30, height: 30}}/>}
                                    <Typography variant="subtitle1">
                                        {profile.user?.username}
                                    </Typography>
                                </Link>
                                <Typography variant="body2" sx={{fontSize: 13}}>
                                    {profile.tags?.map(tag=>{
                                        return <>
                                            {tag.label}{' '}
                                        </>
                                        })}
                                </Typography>
                            </Box>
                        </Box>
                    :
                        myView
                            ? 
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    width: "70%"
                                }}>
                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
                                            <Tab label="User Info" {...a11yProps(0)} />
                                            <Tab label="Your Posts" {...a11yProps(1)} />
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
                                </Box>
                            : ""
            }
        </>
    )
}
