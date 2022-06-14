import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Profile } from "./Profile"
import { getMyProfile } from "./ProfileManager"


export const MyProfile = () => {
    const [profile, setMyProfile] = useState({})

    useEffect(()=>{
        debugger
        getMyProfile().then(data=>setMyProfile(data))
    },[])

    return(
        <>
            <Box>
                <Profile listView={false} myView={true} profile={profile}/>
            </Box>
        </>
    )
}
