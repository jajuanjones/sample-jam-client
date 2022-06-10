import { Box } from "@mui/system";
import React, { useState,useEffect } from "react";
import ForumIcon from '@mui/icons-material/Forum';


export const Category = ( category ) => {

    return (
        <>
        {/* Return category label content */}
        {/* Eventually we will want a length of a list of posts with a certain category */}
        <Box>
            <Box>
                <ForumIcon/>
            </Box>
            <Box key={category.id}>
                {category.label}
            </Box>
        </Box>
        </>
    )
}
