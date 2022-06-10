import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <Link to="/forums">Home</Link>
      {
        localStorage.getItem("auth_token") !== null ?
          <button onClick={() => {
            localStorage.removeItem("auth_token")
            history.push({ pathname: "/" })
          }}>
            Logout
          </button>
          :
          <>
            <Link to="/login">Login/Register</Link>
          </>
      }
    </nav>
  )
}
