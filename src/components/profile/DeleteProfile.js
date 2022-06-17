import { Box, Button, Typography } from "@mui/material"
import { useHistory } from "react-router-dom"
import { deleteProfile } from "./ProfileManager"

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

export const NotifyDeleteProfile = ({showAlert, setShowAlert}) => {
    const history = useHistory()
    return(
        <>
            <Box>
                <Box sx={style}>
                    <Box>
                        {
                            showAlert != -1
                            ?
                                <Typography>Are you sure you wish to delete your account? This can't be reversed</Typography>
                            :
                                <Typography>Account Deleted.</Typography>
                        }
                    </Box>
                    <Box>
                        {
                            showAlert != -1 ? <><Button onClick={()=>{
                                deleteProfile(showAlert).then(()=>{
                                setShowAlert(0)
                                history.push("/")
                                })
                                }}>Delete</Button>
                            <Button onClick={()=>setShowAlert(0)}>Cancel</Button></>
                            :
                            ""
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}