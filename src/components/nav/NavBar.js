import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Box } from "@mui/system"
import { Button } from "@mui/material"


export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <Box sx={{textDecoration: "none"}}>
        <Link to="/forums">
          <HomeOutlinedIcon fontSize="large" 
          sx={{
            color: "black",
            mt: "10px"
          }}/>
        </Link>
        {
          localStorage.getItem("auth_token") !== null ?
            <Button variant="contained" onClick={() => {
              localStorage.removeItem("auth_token")
              history.push({ pathname: "/welcome-page" })
            }}>
              Logout
            </Button>
            :
            <>
              <Link to="/login">
                <Button variant="contained">Login/Register</Button>
              </Link>
            </>
        }
      </Box>
    </nav>
  )
}
