import { Typography } from "@mui/material"
import { Box } from "@mui/system"


export const Comment = ({listView, comment}) => {
    return(
        <>
            {
                listView
                    ?
                    <Box>
                        <Box>
                            <Typography>
                                {/* need to import some default user img */}
                                {comment.profile?.profile_img != null ? comment.profile?.profile_img : ""}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                {comment.text}
                            </Typography>
                        </Box>
                    </Box>
                    :
                    ""
            }
        </>
    )
}
