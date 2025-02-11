import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { editPost, getSinglePost } from "./PostManager"


export const UpdatePostForm = ({setIsEditing, refreshPage, setPost, post}) => {
    // state variable to use in ternary checking if text string has changed
    const [currentPost, setCurrentPost] = useState({text:""})
    // get the current post so we can check its text
    useEffect(()=>{
        if(post){
            getSinglePost(post.id).then(setCurrentPost)
        }
    },[])

    const handleSubmitPost = (e) => {
        e.preventDefault()
        const editedPost = {
            text: post.text,
            id: post.id
        }
        if(editedPost.text) {
            editPost(editedPost).then(()=>{
                setIsEditing(false)
                refreshPage()
            })
        }
    }

    const handleControlledInput = (e) => {
        const editedPost = Object.assign({}, post)
        editedPost[e.target.name] = e.target.value
        setPost(editedPost)
    }

    return(
        <>
            <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "70%",
                    height: "20em"
                }}>
                <Box sx={{
                    
                }}>
                    <TextField
                        margin="normal"
                        size="small"
                        fullWidth
                        multiline
                        rows={5}
                        id="text"
                        label="Edit Post"
                        name="text"
                        value={post.text}
                        onChange={handleControlledInput}
                        autoFocus
                    />
                </Box>
                <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                    <Button
                    variant="text"
                    sx={{
                        width: "7rem",
                        height: "2rem",
                        color: "black",
                        ":hover": {
                            backgroundColor: "rgb(22, 211, 22)"
                        },
                        mr: 1
                    }}
                    onClick={(e)=>{
                        setIsEditing(false)
                        refreshPage()
                    }}>
                        <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                            Cancel
                        </Typography>
                    </Button>
                    {
                        post.text.length == currentPost.text.length
                            ?
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
                                disabled>
                                    <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                                        Save
                                    </Typography>
                                </Button>
                            :
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
                                    handleSubmitPost(e)
                                }}>
                                    <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                                        Save
                                    </Typography>
                                </Button>

                    }
                </Box>
            </Box>
        </>
    )
}
