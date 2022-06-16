import { Typography, Button, Avatar } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import { DeleteRounded } from "@mui/icons-material"
import { Profile } from "../profile/Profile";
import { deleteComment } from "./CommentManager";
import { NotifyOnClickDelete } from "../utils/NotifyDelete"
import { UpdateCommentForm } from "./UpdateComment"


export const Comment = ({listView, comment, refreshPage}) => {
    const [editing, setIsEditing] = useState(false)
    const [showAlert, setShowAlert] = useState(0)

    return(
        <>
            {
                listView && comment
                    ?
                    <Box>
                        {
                            showAlert != 0 ? <NotifyOnClickDelete
                                showAlert={showAlert}
                                setShowAlert={setShowAlert}
                                deleteComment={deleteComment}
                                choicePost={false}
                                refreshPage={refreshPage}/> : ""
                        }
                        <Box>
                            <Profile listView={true} myView={false} profile={comment.profile}/>
                        </Box>
                        {
                            editing
                                ?
                                    <Box>
                                        <UpdateCommentForm setIsEditing={setIsEditing} comment={comment} refreshPage={refreshPage}/>
                                    </Box>
                                :
                                    <Box sx={{
                                        padding: "1rem"
                                    }}>
                                        <Typography variant="subtitle1">
                                            {comment.text}
                                        </Typography>
                                        {
                                            comment.is_my_comment 
                                                ?
                                                    <Box>
                                                        <Button onClick={()=>setIsEditing(true)}>
                                                            <EditRoundedIcon fontSize="small"/>
                                                        </Button>
                                                        <Button onClick={()=>setShowAlert(comment.id)}>
                                                            <DeleteRounded fontSize="small"/>
                                                        </Button>
                                                    </Box> 
                                                : ""
                                        }
                                    </Box>
                        }
                        
                    </Box>
                    :
                    ""
            }
        </>
    )
}
