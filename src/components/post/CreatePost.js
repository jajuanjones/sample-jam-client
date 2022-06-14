import { Box, Button, formControlClasses, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createPost } from "./PostManager"


export const CreatePostForm = () => {
    const {categoryId} = useParams()
    const [post, setPost] = useState({
        category: categoryId,
        text: ""
    })
    const history = useHistory()

    const handleSubmitPost = (e) => {
        e.preventDefault()
        const newPost = {
            title: post.title,
            text: post.text,
            category: post.category
        }
        debugger
        if(newPost.title && newPost.text && newPost.category) {
            createPost(newPost).then((res)=>history.push(`/forum/posts/${res.id}`))
        }
    }

    const handleControlledInput = (e) => {
        const newPost = Object.assign({}, post)
        newPost[e.target.name] = e.target.value
        setPost(newPost)
    }

    return(
        <>
            <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "70%"
                }}>
                <Box>
                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="title"
                        label="Title"
                        name="title"
                        value={post.title}
                        onChange={handleControlledInput}
                        autoFocus
                    />
                </Box>
                <Box sx={{
                    height: "20em"
                }}>
                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        id="text"
                        label="Text"
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
                            Create Post
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}
