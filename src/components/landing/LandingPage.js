import React from "react";
import { Box } from "@mui/system";
import heroLogo from "../landing/beautiful-shot-colorful-sunset-beach.jpg"
import { Typography } from "@mui/material";


export const LandingPage = () => {
    return (
    <>  
        <main>
            <section className="hero-section">
                <Box component="img"
                    sx={{
                    height: 100,
                    width: 100,
                    }}
                    alt="Welcome-Img"
                    src={heroLogo}/>
                <Box>
                    <Typography variant="h3">Welcome to <span>Sample Jam</span></Typography>
                    <Typography variant="body1">A forum built by musicians for musicians.<br/>
                    Come have engaging conversations about a diversity of topics!</Typography>
                </Box>
            </section>
        </main>
    </>
    )
}
