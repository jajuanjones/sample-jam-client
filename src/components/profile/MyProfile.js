import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Profile } from "./Profile"
import { getMyProfile } from "./ProfileManager"


export const MyProfile = () => {
    const [profile, setMyProfile] = useState({})

    useEffect(()=>{
        getMyProfile().then(data=>setMyProfile(data))
    },[])

    const refreshProfilePage = () => {
        getMyProfile().then(setMyProfile)
    }

    return(
        <>
            <Box>
                <Profile
                    listView={false} myView={true}
                    profile={profile} refreshProfilePage={refreshProfilePage}
                    setMyProfile={setMyProfile}/>
            </Box>
        </>
    )
}
