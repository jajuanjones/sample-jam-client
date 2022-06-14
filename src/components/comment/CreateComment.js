import { Box, Button, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createComment } from "../post/PostManager"

export const CreateCommentForm = ({ post, refreshPage }) => {
    const [comment, setComment] = useState({
        text: "",
        post: post.id
    })
    const history = useHistory()

    const handleSubmitComment = (e) => {
        e.preventDefault()
        const newComment = {
            text: comment.text,
            post: post.id
        }
        if(newComment.text) {
            createComment(newComment, post.id).then((res)=>{
                refreshPage()
                setComment({text: ""})
            })
        }
    }

    const handleControlledInput = (e) => {
        const newComment = Object.assign({}, comment)
        newComment[e.target.name] = e.target.value
        setComment(newComment)
    }

    // I only want this component to refresh the comment and create components without rerendering the entire page
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
                        id="text"
                        label="Enter Comment"
                        name="text"
                        value={comment.text}
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
                        handleSubmitComment(e)
                    }}>
                        <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                            Comment
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}



