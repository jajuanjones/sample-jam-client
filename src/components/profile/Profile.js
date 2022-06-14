import { Avatar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import { Link } from "react-router-dom"


export const Profile = ({listView, myView, profile}) => {
    const [showModal, setShowModal] = useState(false)

    return(
        <>
            {
                listView
                    ?
                        <Box>
                            <Link to={`profiles/${profile.id}-${profile.user?.username}`}>
                                <Typography variant="subtitle1">
                                    {profile.profile_img != null ? profile.profile_img : <Avatar />}
                                    {profile.user?.username}
                                    {profile.tags?.map(tag=>{
                                        return tag.label})}
                                </Typography>
                            </Link>
                        </Box>
                    :
                        myView
                            ? 
                                <Box>
                                    <Box>
                                        <Typography>
                                            {profile.user?.username}
                                        </Typography>
                                        <Typography>
                                            {profile.user?.first_name}
                                        </Typography>
                                        <Typography>
                                            {profile.user?.last_name}
                                        </Typography>
                                        <Typography>
                                            {profile.user?.email}
                                        </Typography>
                                    </Box>
                                </Box>
                            :
                            <Box>
                                <Link to={`profiles/${profile.id}-${profile.user?.username}`}>
                                    <Typography variant="subtitle1">
                                        {profile.user?.username}
                                    </Typography>
                                </Link>
                            </Box>
            }
        </>
    )
}
