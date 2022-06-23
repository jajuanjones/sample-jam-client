import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSinglePost } from "./PostManager"
import { Post } from "./Post"
import { Box } from "@mui/system"
import { CreateCommentForm } from "../comment/CreateComment"
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
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                margin: "3rem auto",
                width: "70%"
            }}>
                <Box sx={{margin: "0 auto", width: "80%"}}>
                    <Box>
                        <Post listview={false} post={post} refreshPage={refreshPage} setPost={setPost}/>
                    </Box>
                    <Box sx={{
                        mt: "2rem"
                    }}>
                        <CreateCommentForm post={post} refreshPage={refreshPage}/>
                    </Box>
                    <Box sx={{
                        mt: "2rem"
                    }}>
                    {
                        filteredComments.map(comment=>{
                            return <Box key={`comment-${comment.id}`}>
                                        <Comment listView={true} comment={comment} refreshPage={refreshPage}/>
                                    </Box>
                        })
                    }
                    </Box>
                </Box>
            </Box>
        </>
    )
}
