import React, {useState, useEffect} from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const changeTheme = () => {
    const [darkTheme, setDarkTheme] = useState(False)
    
    const darkThemeMode = createTheme({
      palette: {
        mode: 'dark',
      },
    });
}