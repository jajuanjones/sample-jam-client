import { Box, Button, Typography } from "@mui/material"
import { useHistory } from "react-router-dom"
import { deleteProfile } from "./ProfileManager"

export const NotifyDeleteProfile = ({showAlert, setShowAlert, deleteProfile}) => {
    const history = useHistory()
    return(
        <>
            <Box>
                <Box>
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
                                setShowAlert(-1)
                                history.push("/forums")
                                })
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