import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";


export const getAllProfiles = () => {
    return fetchIt(`${Settings.API}/profiles`)
}

export const getSingleProfile = (id) => {
    return fetchIt(`${Settings.API}/profiles/${id}`)
}

export const createProfile = (newProfile) => {
    return fetchIt(`${Settings.API}/profiles`, "POST", JSON.stringify(newProfile))
}

export const editProfile = (profile) => {
    return fetchIt(`${Settings.API}/profiles/${profile.id}`, "PUT", JSON.stringify(profile))
}

export const deleteProfile = (id) => {
    return fetchIt(`${Settings.API}/profiles/${id}`, "DELETE")
}
