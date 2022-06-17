import { Box, Button, Typography } from "@mui/material"
import { useHistory } from "react-router-dom"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export const NotifyOnClickDelete = ({showAlert, setShowAlert, deletePost, choicePost, deleteComment, refreshPage}) => {
    const history = useHistory()
    return(
        <>
            <Box>
                <Box sx={style}>
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