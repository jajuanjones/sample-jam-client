import { Box, Button, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { editComment, getSingleComment } from "./CommentManager"

export const UpdateCommentForm = ({ comment, refreshPage, setIsEditing }) => {
    const [currentComment, setCurrentComment] = useState({})

    useEffect(()=>{
        if(comment){
            getSingleComment(comment.id).then(setCurrentComment)
        }
    },[])

    const handleSubmitComment = (e) => {
        e.preventDefault()
        const editedComment = {
            text: currentComment.text,
            id: currentComment.id
        }
        if(editedComment.text) {
            editComment(editedComment).then(()=>{
                setIsEditing(false)
                refreshPage()
            })
        }
    }

    const handleControlledInput = (e) => {
        const editedComment = Object.assign({}, comment)
        editedComment[e.target.name] = e.target.value
        setCurrentComment(editedComment)
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
                        fullWidth
                        multiline
                        rows={3}
                        id="text"
                        label="Edit Comment"
                        name="text"
                        value={currentComment.text}
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
                        {/* if comment.text.length is 0 make the button disabled */}
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
                        handleSubmitComment(e)
                    }}>
                        {/* if comment.text.length is 0 make the button disabled */}
                        <Typography variant="body3" sx={{fontSize: "0.8rem"}}>
                            Save
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    )
}
