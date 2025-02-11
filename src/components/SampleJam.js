import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { LandingPage } from "./landing/LandingPage"

export const SampleJam = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  return <>
    
    <Route>
      <ApplicationViews token={token} setToken={setToken} />
    </Route>

    <Route exact path={["/welcome-page", "/"]}>
      <LandingPage />
    </Route>

    <Route exact path="/login" >
      <Login token={token} setToken={setToken} />
    </Route>

    <Route path="/register" exact>
      <Register token={token} setToken={setToken} />
    </Route>

  </>
}
