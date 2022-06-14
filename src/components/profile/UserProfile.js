import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Profile } from "./Profile"
import { getSingleProfile } from "./ProfileManager"


export const UserProfile = () => {
    const [profile, setUserProfile] = useState({})
    const {profileId} = useParams()

    useEffect(()=>{
        getSingleProfile(profileId).then(data=>setUserProfile(data))
    },[profileId])

    return(
        <>
            <Box>
                <Profile listView={false} myView={false} profile={profile}/>
            </Box>
        </>
    )
}
