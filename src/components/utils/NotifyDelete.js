import { Box, Button, Typography } from "@mui/material"
import { useHistory } from "react-router-dom"

export const NotifyOnClickDelete = ({showAlert, setShowAlert, deletePost, choicePost, deleteComment, refreshPage}) => {
    const history = useHistory()
    return(
        <>
            <Box>
                <Box>
                    <Box>
                        {
                            showAlert != -1
                            ?
                                choicePost
                                    ?
                                        <Typography>Are you sure you wish to delete this post?</Typography>
                                    :
                                        <Typography>Are you sure you wish to delete this comment?</Typography>
                            :
                                <Typography>Post Successfully Deleted.</Typography>
                        }
                    </Box>
                    <Box>
                        {
                            showAlert != -1 ? <><Button onClick={()=>{
                                if (choicePost) {
                                    deletePost(showAlert).then(()=>{
                                    setShowAlert(-1)
                                    history.push("/forums")
                                    })
                                }
                                else {
                                    deleteComment(showAlert).then(()=>{
                                    setShowAlert(-1)
                                    refreshPage()
                                    })
                                }
                                }}>Delete</Button>
                            <Button onClick={()=>setShowAlert(0)}>Cancel</Button></>
                            :
                            <Button onClick={()=>setShowAlert(0)}>Close</Button>
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}