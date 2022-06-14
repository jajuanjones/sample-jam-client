import { Box } from "@mui/system"
import React, {useState, useEffect} from "react"
import { Post } from "./Post"
import { getAllPosts } from "./PostManager"

export const PostList = () => {
    const [posts, updatePosts] = useState([])

    useEffect(()=>{
        getAllPosts().then(data=>updatePosts(data))
    },[])

    return(
        <>
            {
                posts.map(post =>{
                    return <Box>
                                <Post listview={true} post={post}/>
                            </Box>
                })
            }
        </>
    )
}
