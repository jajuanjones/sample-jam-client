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

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path={["/welcome-page", "/"]}>
                <LandingPage/>
            </Route>
            <Route exact path="/forums/forum/:categoryId(\d+)-:categoryName/posts">
                <SingleCategory/>
            </Route>
            <Route exact path="/forums">
                <CategoryList/>
            </Route>
            <Route exact path="/create-profile/:userId(\d+)">
                <CreateProfile/>
            </Route>
            <Route exact path="/forum/posts/:postId(\d+)">
                <SinglePost/>
            </Route>
            <Route exact path="/forum/:categoryId(\d+)-:categoryName/make-post">
                <CreatePostForm/>
            </Route>
            <Route exact path="/profiles/your-profile">
                <MyProfile/>
            </Route>
            <Route exact path="/profiles/:profileId(\d+)-:profileName">
                <UserProfile/>
            </Route>
            <Route exact path="/upload-your-music">
                <UploadMusic/>
            </Route>
        </main>
    </>
}
