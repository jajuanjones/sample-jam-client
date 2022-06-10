import React from "react"
import { Route } from "react-router-dom"
import { LandingPage } from "./landing/LandingPage"

export const ApplicationViews = () => {
    return <>
        <main>
            <Route exact path="/welcome-page">
                <LandingPage/>
            </Route>
        </main>
    </>
}
