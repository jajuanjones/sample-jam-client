import React from "react";
import { Box } from "@mui/system";
import heroLogo from "../landing/pexels-diva-plavalaguna-6150432.jpg"
import { Button, CssBaseline, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";


export const LandingPage = () => {
    const history = useHistory()
    return (
    <>  
        <main>
            <section className="hero-section">
                <Box sx={{
                    minHeight: "100vh",
                    backgroundImage: `url(${heroLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundColor: "rgb(131, 131, 131)",
                    "@media (max-width: 1330px)": {
                        backgroundSize: "1330px 100%",
                        backgroundPosition: "center"
                    }
                    }}>
                    <CssBaseline/>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                        color: "white"
                    }}>
                        <Box sx={{
                            ml: "auto",
                            mr: 10,
                            mt: 25,
                            padding: 5,
                            pr: 9,
                            "@media (max-width: 646px)": {
                                mr: 0,
                                padding: 2
                            }
                        }}>
                            <Typography variant="h3" fontWeight="bold" fontFamily="Nunito">Welcome to 
                            <span style={{
                                color: "rgb(219, 218, 218)",
                                textShadow: "0 0 2px rgb(219, 218, 218)"
                                }}> Sample Jam</span>.</Typography>
                            <Typography variant="subtitle1" fontSize={20}>A forum built by musicians for musicians.<br/>
                            Come have engaging conversations about a diversity of topics!</Typography>
                            <Box>
                                <Button variant="contained"
                                sx={{
                                    backgroundColor: "rgb(19, 185, 19)",
                                    ":hover": {
                                        backgroundColor: "rgb(8, 189, 8)"
                                    }
                                }} onClick={()=>history.push("/login")}>
                                    <Typography fontWeight="bold">
                                        Login/Register
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </section>
            <section className="about-section">
                <Box></Box>
                <Box></Box>
                <Box></Box>
            </section>
        </main>
    </>
    )
}
