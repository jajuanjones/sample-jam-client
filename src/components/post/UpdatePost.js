import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { editPost } from "./PostManager"


export const UpdatePostForm = ({setIsEditing, refreshPage, setPost, post}) => {

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
                    width: "70%"
                }}>
                <Box sx={{
                    height: "20em"
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
                    <Box>
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
                                Cancel
                            </Typography>
                        </Button>
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
                    </Box>
                </Box>
            </Box>
        </>
    )
}
