import { useState } from "react"
import { getUserPosts } from "./PostManager"


export const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([])

    useEffect(()=>{
        getUserPosts().then(data=>setUserPosts(data))
    },[])

    return (
        <>
            {
                userPosts.map(post=>{
                    return <Box>
                                <PostList listview={true} post={post}/>
                            </Box>

                })
            }
        </>
    )
}
