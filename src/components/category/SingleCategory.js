import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCategory } from "./CategoryManager";
import { Box } from "@mui/system";
import { Post } from "../post/Post";

export const SingleCategory = () => {
    const [category, updateCategory] = useState({})
    const [posts, setPosts] = useState([])
    const [filteredPosts, setFilteredPosts] = useState([])
    const {categoryId} = useParams()

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
