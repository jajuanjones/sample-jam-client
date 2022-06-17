import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { MyProfile } from "./MyProfile"
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
                {
                    profile.is_my_profile
                        ?
                            <Box>
                                <MyProfile/>
                            </Box>
                        :
                            <Box>
                                <Profile listView={false} myView={false} profile={profile}/>
                            </Box>

                }
            </Box>
        </>
    )
}
