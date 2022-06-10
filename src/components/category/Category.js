import { Box } from "@mui/system";
import React, { useState,useEffect } from "react";
import ForumIcon from '@mui/icons-material/Forum';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";


export const Category = ({category}) => {

    return (
        <>
        {/* Return category label content */}
        {/* Eventually we will want a length of a list of posts with a certain category */}
        <Box>
            <Box>
                <ForumIcon/>
            </Box>
            <Box sx={{m: "1rem"}} key={category.id}>
                <Link to={`/forums/forum/${category.id}/posts`}>
                    <Typography variant="body1">{category.label}</Typography>
                </Link>
            </Box>
        </Box>
        </>
    )
}
