
// src/ThemeContext.js

import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('system');

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(() => 
        createTheme({
            palette: {
                mode: mode === 'system' ? (prefersDarkMode ? 'dark' : 'light') : mode,
            },
        }), [mode, prefersDarkMode]);

    const toggleTheme = (event, newMode) => {
        if (newMode !== null) {
            setMode(newMode);
        }
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
