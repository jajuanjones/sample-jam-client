import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings";


export const getAllProfiles = () => {
    return fetchIt(`${Settings.API}/profiles`)
}

export const getSingleProfile = (id) => {
    return fetchIt(`${Settings.API}/profiles/${id}`)
}

export const getMyProfile = () => {
    return fetchIt(`${Settings.API}/profiles/my-profile`)
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

export const getTagsForProfile = () => {
    return fetchIt(`${Settings.API}/tags`)
}

// Extra methods specific to user
export const getSingleUser = (id) => {
    return fetchIt(`${Settings.API}/users/${id}`)
}

export const editUser = (user) => {
    return fetchIt(`${Settings.API}/users/${user.id}`, "PUT", JSON.stringify(user))
}

export const deleteUser = (id) => {
    return fetchIt(`${Settings.API}/users/${id}`, "DELETE")
}
