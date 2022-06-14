import { useEffect, useState } from "react"
import { PostList } from "./PostList"
import { getMyPosts } from "./PostManager"


export const MyPosts = () => {
    const [myPosts, setMyPosts] = useState([])

    useEffect(()=>{
        getMyPosts().then(data=>setMyPosts(data))
    },[])

    return (
        <>
            {
                myPosts.map(post=>{
                    return <Box>
                                <PostList listview={true} post={post}/>
                            </Box>

                })
            }
        </>
    )
}
