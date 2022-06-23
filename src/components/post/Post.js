import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Box } from "@mui/system"
import { useState } from "react"
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import { DeleteRounded } from "@mui/icons-material"
import { Profile } from "../profile/Profile"
import { UpdatePostForm } from "./UpdatePost"
import { deletePost } from "./PostManager"
import { NotifyOnClickDelete } from "../utils/NotifyDelete"
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'


export const Post = ({ post, listview, refreshPage, setPost }) => {
    const [editing, setIsEditing] = useState(false)
    const [showAlert, setShowAlert] = useState(0)

    return (
        <>
            {
                listview && post
                    ?
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        m: "0.4rem auto",
                        width: "100%",
                        border: 1,
                        borderColor: "rgba(165, 165, 165, 0.733)",
                        padding: 1,
                        borderRadius: 1
                        }}>
                        <Box sx={{ml: 3}}>
                            <Profile listView={true} myView={false} profile={post.profile}/>
                        </Box>
                        <Box>
                            <Link to={`/forum/posts/${post.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    ":hover": {
                                        textDecoration: "underline"
                                    }
                                }}>
                                <Typography variant="h6">
                                    {post.title}
                                </Typography>
                            </Link>
                        </Box>
                    </Box> 
                    :
                    post ?
                    <Box sx={{
                        width: "100%",
                        m: "0 auto"
                    }}>
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
                                    <Box sx={{display: "flex", flexDirection: "row"}}>
                                        <ChatBubbleOutlineIcon sx ={{mt: 1, color: "rgba(145, 145, 145, 0.705)"}} fontSize="small"/>
                                        <Typography variant="body2" sx={{
                                            fontSize: 10,
                                            paddingLeft: 1,
                                            paddingTop: 1.3,
                                            color: "rgba(145, 145, 145, 0.705)"
                                            }}>{post.comment_count} Comments</Typography>
                                    {
                                        post.is_my_post 
                                            ?
                                                <>
                                                    <Button onClick={()=>setIsEditing(true)}>
                                                        <EditRoundedIcon sx={{color: "rgba(145, 145, 145, 0.705)"}} fontSize="small"/>
                                                    </Button>
                                                    <Button onClick={()=>setShowAlert(post.id)}>
                                                        <DeleteRounded sx={{color: "rgba(145, 145, 145, 0.705)"}} fontSize="small"/>
                                                    </Button>
                                                </> 
                                            : ""
                                    }
                                    </Box>
                                </Box>
                        }
                    </Box>
                    : "No Post"
            }
        </>
    )
}
