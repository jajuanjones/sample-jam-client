import { fetchIt } from "../utils/Fetch"
import { Settings } from "../utils/Settings"

export const getAllSongs = () => {
    return fetchIt(`${Settings.API}/songs`)
}

export const getSingleSong = (id) => {
    return fetchIt(`${Settings.API}/songs/${id}`)
}

export const uploadSong = (newSong) => {
    return fetchIt(`${Settings.API}/songs`, "POST", JSON.stringify(newSong))
} 

export const deleteSong = (id) => {
    return fetchIt(`${Settings.API}/songs/${id}`)
}
