import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostList } from "../post/PostList";
import { getSingleCategory } from "./CategoryManager";
import { Box } from "@mui/system";

export const SingleCategory = () => {
    const [category, updateCategory] = useState({})
    const [posts, setPosts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
            if (categoryId) {
                getSingleCategory(categoryId).then(data=>updateCategory(data))
            } 
    },[categoryId])


    const filteredPosts = posts.filter(post => {
        return post.category === category
    })

    return(
        <>
            <Box>
                {
                    filteredPosts.map(post => {
                        return <Box>
                                    <PostList post={post}/>
                                </Box>
                    })
                }
            </Box>
        </>
    )
}
