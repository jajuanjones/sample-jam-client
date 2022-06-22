import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleCategory } from "./CategoryManager";
import { Box } from "@mui/system";
import { Post } from "../post/Post";
import { Button, Typography } from "@mui/material";
import AssignmentIcon from '@mui/icons-material/Assignment';

export const SingleCategory = () => {
    const [category, updateCategory] = useState({})
    const [filteredPosts, setFilteredPosts] = useState([])
    const {categoryId} = useParams()
    const history = useHistory()

    useEffect(()=>{
            if (categoryId) {
                getSingleCategory(categoryId)
                .then(data=>{
                    updateCategory(data)
                    setFilteredPosts(data.posts)
                })
            } 
    },[categoryId])

    return(
        <>
            <Box>
                <Button variant="contained"
                sx={{
                    width: "9rem",
                    height: "1.5rem",
                    color: "white",
                    backgroundColor: "rgb(22, 211, 22)",
                    ":hover": {
                        backgroundColor: "rgb(8, 189, 8)"
                    }
                }}
                onClick={()=>history.push(`/forum/${category.id}-${category.label}/make-post`)}>
                    <AssignmentIcon fontSize="small" sx={{paddingRight: 0.5}}/>
                    <Typography variant="body3" sx={{fontSize: "0.7rem"}}>
                        Create a Post
                    </Typography>
                </Button>
            </Box>
            <Box sx={{mt: "5rem"}}>
                {
                    filteredPosts.map(post => {
                        return <Box key={post.id}>
                                    <Post listview={true} post={post}/>
                                </Box>
                    })
                }
            </Box>
        </>
    )
}
