import { fetchIt } from '../utils/Fetch'
import { Settings } from '../utils/Settings'

export const getAllPosts = () => {
    return fetchIt(`${Settings.API}/posts`)
}

export const getSinglePost = (id) => {
    return fetchIt(`${Settings.API}/posts/${id}`)
}

export const getPostsOfCategory = (id) => {
    return fetchIt(`${Settings.API}/category-posts/${id}`)
}

export const createPost = (newPost) => {
    return fetchIt(`${Settings.API}/posts`, "POST", JSON.stringify(newPost))
}

export const editPost = (post) => {
    return fetchIt(`${Settings.API}/posts/${post.id}`, "PUT", JSON.stringify(post))
}

export const deletePost = (id) => {
    return fetchIt(`${Settings.API}/posts/${id}`, "DELETE")
}

export const getMyPosts = () => {
    return fetchIt(`${Settings.API}/posts/my-posts`)
}

export const getUserPosts = () => {
    return fetchIt(`${Settings.API}/posts/user-posts`)
}

// get the liked posts of the currently logged in user
// export const getMyLikedPosts = () => {
//     return fetchIt(`${Settings.API}/posts/my-liked-posts`)
// }

// get the posts the user has liked
// export const getUserLikedPosts = () => {
//     return fetchIt(`${Settings.API}/posts/user-liked-posts`)
// }

export const getPostComments = () => {
    return fetchIt(`${Settings.API}/posts/post-comments`)
}

export const createComment = (newComment, id) => {
    return fetchIt(`${Settings.API}/posts/${id}/comment`, "POST", JSON.stringify(newComment))
}
