import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCategory } from "./CategoryManager";

export const SingleCategory = () => {
    const [category, updateCategory] = useState({})
    // { categoryId } = useParams()

    // useEffect(()=>{
    //     categoryId ?
    //     getSingleCategory(categoryId)
    // },[])

    const filterPostsWithThisCategory = () => {

    }

    return(
        <>
        </>
    )
}
