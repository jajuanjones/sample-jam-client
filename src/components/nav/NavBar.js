import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Box } from "@mui/system"
import { Button, Typography } from "@mui/material"


export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <Box sx={{display: "flex", flexDirection: "row"}}>
        <Link style={{textDecoration: "none", marginTop: "0.5em"}} to="/forums">
          <HomeOutlinedIcon fontSize="large" 
          sx={{
            color: "black"
          }}/>
        </Link>
        <Link style={{textDecoration: "none", marginTop: "0.5em"}} to="/profiles/your-profile">
          <Typography variant="body1" sx={{fontSize:"1.2em"}}>
            Profile
          </Typography>
        </Link>
        {
          localStorage.getItem("auth_token") !== null ?
            <Button variant="contained" 
              sx={{
                background: "grey",
                ":hover": {
                  background: "grey"
                },
                mt: "0.5em"
              }}
              onClick={() => {
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
