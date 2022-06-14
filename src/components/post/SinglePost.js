import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPostComments, getSinglePost } from "./PostManager"
import { Post } from "./Post"
import { Box } from "@mui/system"
import { CreateCommentForm } from "../comment/CreateComment"
import { CoPresent } from "@mui/icons-material"
import { Comment } from "../comment/Comment"


export const SinglePost = () => {
    const [post, setPost] = useState({})
    const [filteredComments, setFilteredComments] = useState([])
    const {postId} = useParams()

    useEffect(()=>{
        if (postId) {
            getSinglePost(postId)
            .then(data=>{
                setPost(data)
                setFilteredComments(data.comments)
            })
            
        }
    },[postId])

    const refreshPage = () => {
        getSinglePost(postId)
            .then(data=>{
                setPost(data)
                setFilteredComments(data.comments)
            })
    }

    return (
        <>
            <Box>
                <Post listview={false} post={post}/>
            </Box>
            <Box>
                <CreateCommentForm post={post} refreshPage={refreshPage}/>
            </Box>
            {
                filteredComments.map(comment=>{
                    return <Box>
                                <Comment listView={true} comment={comment}/>
                            </Box>
                })
            }
        </>
    )
}
