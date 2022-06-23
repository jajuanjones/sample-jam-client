import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"
import { SingleCategory } from "./category/SingleCategory"
import { CreateProfile } from "./profile/CreateProfile"
import { LandingPage } from "./landing/LandingPage"
import { SinglePost } from "./post/SinglePost"
import { CreatePostForm } from "./post/CreatePost"
import { MyProfile } from "./profile/MyProfile"
import { CreateCommentForm } from "./comment/CreateComment"
import { UserProfile } from "./profile/UserProfile"
import { UploadMusic } from "./music/UploadMusic"
import { NavBar } from "./nav/NavBar"

export const ApplicationViews = ({token, setToken}) => {
    return <>
        <main>
            <Route exact path="/forums/forum/:categoryId(\d+)-:categoryName/posts">
                <NavBar token={token} setToken={setToken} />
                <SingleCategory />
            </Route>
            <Route exact path="/forums">
                <NavBar token={token} setToken={setToken} />
                <CategoryList />
            </Route>
            <Route exact path="/create-profile/:userId(\d+)">
                <NavBar token={token} setToken={setToken} />
                <CreateProfile />
            </Route>
            <Route exact path="/forum/posts/:postId(\d+)">
                <NavBar token={token} setToken={setToken} />
                <SinglePost />
            </Route>
            <Route exact path="/forum/:categoryId(\d+)-:categoryName/make-post">
                <NavBar token={token} setToken={setToken} />
                <CreatePostForm />
            </Route>
            <Route exact path="/profiles/your-profile">
                <NavBar token={token} setToken={setToken} />
                <MyProfile />
            </Route>
            <Route exact path="/profiles/:profileId(\d+)-:profileName">
                <NavBar token={token} setToken={setToken} />
                <UserProfile />
            </Route>
            <Route exact path="/upload-your-music">
                <NavBar token={token} setToken={setToken} />
                <UploadMusic />
            </Route>
        </main>
    </>
}
