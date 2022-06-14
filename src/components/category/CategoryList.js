import React, { useEffect, useState } from "react";
import { getAllCategories } from "./CategoryManager";
import { Typography, Box } from "@mui/material";
import '@fontsource/roboto/300.css';
import { Category } from "./Category";

export const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getAllCategories().then(data=>setCategories(data))
    },[])

    return(
        <>
            {
                categories.map(category=>{
                    return <Box key={category.id}>
                                <Box>
                                    <Category category={category}/>
                                </Box>
                            </Box>
                })
            }
        </>
    )
}
