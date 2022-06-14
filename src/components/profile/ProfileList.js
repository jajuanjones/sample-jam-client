import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { Profile } from "./Profile"
import { getAllProfiles } from "./ProfileManager"


export const ProfileList = () => {
    const [profiles, setProfiles] = useState([])

    useEffect(()=>{
        getAllProfiles().then(data=>setProfiles(data))
    },[])

    return(
        <>
            {
                profiles.map(profile=>{
                    return <Box>
                                <Profile listView={true} myView={false} profile={profile}/>
                            </Box>
                })
            }
            
        </>
    )

}
