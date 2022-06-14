import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";

export const getAllGenres = () => {
    return fetchIt(`${Settings.API}/genres`)
}

export const getSingleGenre = (id) => {
    return fetchIt(`${Settings.API}/genres/${id}`)
}
