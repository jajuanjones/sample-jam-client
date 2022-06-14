import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { editPost } from "./PostManager"


export const UpdatePostForm = () => {
    const [post, setPost] = useState({
        text: post.text
    })
    const history = useHistory()

    const handleSubmitPost = (e) => {
        e.preventDefault()
        const editedPost = {
            text: post.text
        }
        if(editedPost.text) {
            editPost(editedPost).then((res)=>history.push(`/forum/posts/${res.id}`))
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
                        required
                        fullWidth
                        id="text"
                        label={post.text}
                        name="text"
                        value={post.text}
                        onChange={handleControlledInput}
                        autoFocus
                    />
                </Box>
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
        </>
    )
}
