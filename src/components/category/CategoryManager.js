import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getAllCategories = () => {
    return fetchIt(`${Settings.API}/categories`)
}

export const getSingleCategory = (id) => {
    return fetchIt(`${Settings.API}/categories/${id}`)
}
