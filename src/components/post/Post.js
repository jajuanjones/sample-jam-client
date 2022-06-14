import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Box } from "@mui/system"


export const Post = ({ post, listview }) => {
    return (
        <>
            {
                listview 
                    ?
                    <Box>
                        <Link to={`/forum/posts/${post.id}`}>
                            <Typography variant="h6">
                                {post.title}
                            </Typography>
                        </Link>
                    </Box> 
                    :
                    <Box>
                        <Box>
                            <Typography variant="h6">
                                {post.title}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2">
                                {post.text}
                            </Typography>
                        </Box>
                    </Box>
            }
        </>
    )
}
