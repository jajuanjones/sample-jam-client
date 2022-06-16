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
        <Box sx={{
                m: "1rem",
                display: "flex",
                flexDirection: "row"
                }}>
            <Box sx={{m: "1rem"}}>
                <ForumIcon/>
            </Box>
            <Box sx={{mt: "1em"}} key={category.id}>
                <Link style={{
                    textDecoration: "none", 
                    color: "black"}} 
                    to={`/forums/forum/${category.id}-${category.label}/posts`}>
                    <Typography variant="subtitle1">{category.label}</Typography>
                </Link>
            </Box>
        </Box>
        </>
    )
}
