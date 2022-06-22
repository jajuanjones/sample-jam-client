import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createPost } from "./PostManager"


export const CreatePostForm = () => {
    const {categoryId} = useParams()
    const [post, setPost] = useState({
        category: categoryId,
        text: "",
        title: ""
    })
    const history = useHistory()

    const handleSubmitPost = (e) => {
        e.preventDefault()
        const newPost = {
            title: post.title,
            text: post.text,
            category: post.category
        }
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
                    justifyContent: "center",
                    margin: "3rem auto"
                }}>
                <Box sx={{width: "70%", margin: "0 auto"}}>
                    <Typography variant="h5"
                    sx={{
                        fontWeight: "500",
                        "-webkit-font-smoothing": "antialiased",
                        "-moz-osx-font-smoothing": "grayscale",
                        fontSize: 20
                        }}>Create a post</Typography>
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
                <Box sx={{width: "70%", margin: "0 auto"}}>
                    <TextField
                        margin="normal"
                        size="small"
                        required
                        fullWidth
                        multiline
                        rows={7}
                        id="text"
                        label="Text"
                        name="text"
                        value={post.text}
                        onChange={handleControlledInput}
                        autoFocus
                    />
                </Box>
                <Box sx={{display: "flex", justifyContent: "flex-end", marginRight: "9.8rem"}}>
                    {
                        post.text.length == 0 || post.title.length == 0
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
                                        Post
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
                                        Post
                                    </Typography>
                                </Button>
                    }
                </Box>
            </Box>
        </>
    )
}
