import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Box } from "@mui/system"
import { Avatar, Button, Typography } from "@mui/material"


export const NavBar = () => {
  const history = useHistory()
  return (
    <nav>
      <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
        {/* <Avatar/> */}
        <Link style={{textDecoration: "none", margin: "0.5em"}} to="/forums">
          <HomeOutlinedIcon fontSize="large" 
          sx={{
            color: "black"
          }}/>
        </Link>
        <Link style={{textDecoration: "none", margin: "0.5em"}} to="/profiles/your-profile">
          <Typography variant="body1" sx={{fontSize:"1.4em"}}>
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
                margin: "0.5em"
              }}
              onClick={() => {
              localStorage.removeItem("auth_token")
              history.push({ pathname: "/welcome-page" })
            }}>
              Logout
            </Button>
            :
            <>
              <Link to="/login" style={{textDecoration: "none"}}>
                <Button variant="contained"
                sx={{
                  background: "grey",
                  ":hover": {
                    background: "grey"
                  },
                  margin: "0.5em"
                }}>
                  Login/Register
                </Button>
              </Link>
            </>
        }
      </Box>
    </nav>
  )
}
