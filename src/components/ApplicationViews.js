import React from "react"
import { Route } from "react-router-dom"
import { CategoryList } from "./category/CategoryList"
import { SingleCategory } from "./category/SingleCategory"
import { CreateProfile } from "./profile/CreateProfile"
import { LandingPage } from "./landing/LandingPage"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/welcome-page">
                <LandingPage/>
            </Route>
            <Route exact path="/forums/forum/:categoryId(\d+)">
                <SingleCategory/>
            </Route>
            <Route exact path="/forums">
                <CategoryList/>
            </Route>
            <Route exact path="/create-profile/:userId(\d+)">
                <CreateProfile/>
            </Route>
        </main>
    </>
}
