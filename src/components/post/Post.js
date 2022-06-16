import { Button, Typography } from "@mui/material"
import { Link, useHistory } from "react-router-dom"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { getMyProfile, getSingleProfile } from "../profile/ProfileManager"
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { DeleteRounded } from "@mui/icons-material"
import { Profile } from "../profile/Profile"
import { UpdatePostForm } from "./UpdatePost"
import { deletePost } from "./PostManager"
import { NotifyOnClickDelete } from "../utils/NotifyDelete"


export const Post = ({ post, listview, refreshPage, setPost }) => {
    const [editing, setIsEditing] = useState(false)
    const [showAlert, setShowAlert] = useState(0)

    return (
        <>
            {
                listview && post
                    ?
                    <Box>
                        <Profile listView={false} myView={false} profile={post.profile}/>
                        <Link to={`/forum/posts/${post.id}`}
                            style={{
                                textDecoration: "none",
                                ":hover": {
                                    textDecoration: "underline"
                                }
                            }}>
                            <Typography variant="h6">
                                {post.title}
                            </Typography>
                        </Link>
                    </Box> 
                    :
                    <Box>
                        {
                            showAlert != 0 ? <NotifyOnClickDelete
                                showAlert={showAlert}
                                setShowAlert={setShowAlert}
                                deletePost={deletePost}
                                choicePost={true}
                                post={post}/> : ""
                        }
                        <Box>
                            <Profile listView={true} myView={false} profile={post.profile}/>
                            <Typography variant="h6">
                                {post.title}
                            </Typography>
                        </Box>
                        {
                            editing
                                ? 
                                <Box sx={{
                                    mb: "-9rem"
                                }}>
                                    <UpdatePostForm post={post} setIsEditing={setIsEditing} refreshPage={refreshPage} setPost={setPost}/>
                                </Box>
                                : 
                                <Box>
                                    <Typography variant="body2">
                                        {post.text}
                                    </Typography>
                                    {
                                        post.is_my_post 
                                            ?
                                                <Box>
                                                    <Button onClick={()=>setIsEditing(true)}>
                                                        <EditRoundedIcon fontSize="small"/>
                                                    </Button>
                                                    <Button onClick={()=>setShowAlert(post.id)}>
                                                        <DeleteRounded fontSize="small"/>
                                                    </Button>
                                                   </Box> 
                                            : ""
                                    }
                                </Box>
                        }
                    </Box>
            }
        </>
    )
}
