import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";


export const getAllComments = () => {
    return fetchIt(`${Settings.API}/comments`)
}

export const getSingleComment = (id) => {
    return fetchIt(`${Settings.API}/comments/${id}`)
}

export const editComment = (comment) => {
    return fetchIt(`${Settings.API}/comments/${comment.id}`, "PUT", JSON.stringify(comment))
}

export const deleteComment = (id) => {
    return fetchIt(`${Settings.API}/comments/${id}`, "DELETE")
}
