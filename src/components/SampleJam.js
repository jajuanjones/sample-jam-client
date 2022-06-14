import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const SampleJam = () => {
  const [token, setTokenState] = useState(localStorage.getItem('auth_token'))

  const setToken = (newToken) => {
    localStorage.setItem('token', newToken)
    setTokenState(newToken)
  }

  return <>
    <Route>
        <NavBar token={token} setToken={setToken} />
        <ApplicationViews />
    </Route>


    <Route exact path="/login" >
      <Login token={token} setToken={setToken} />
    </Route>

    <Route path="/register" exact>
      <Register token={token} setToken={setToken} />
    </Route>

  </>
}
