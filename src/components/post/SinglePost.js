import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSinglePost } from "./PostManager"
import { Post } from "./Post"
import { Box } from "@mui/system"


export const SinglePost = () => {
    const [post, setPost] = useState({})
    const {postId} = useParams()

    useEffect(()=>{
        if (postId) {
            getSinglePost(postId).then(data=>setPost(data))
        }
    },[postId])

    return (
        <>
            <Box>
                <Post listview={false} post={post}/>
            </Box>
        </>
    )
}
