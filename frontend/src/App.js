// src/App.js

import React, { useContext, useState } from 'react';
import { Container, Box, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { ThemeContext } from './ThemeContext';
import SearchForm from './SearchForm';
import Results from './Results';

const App = () => {
    const [results, setResults] = useState([]);
    const { toggleTheme, mode } = useContext(ThemeContext);

    return (
        <Container>
            <Box display="flex" justifyContent="flex-end" alignItems="flex-end" flexDirection="column" mb={2}>
                <Typography textAlign="center" width="50%">MODE</Typography>
                <ToggleButtonGroup
                    value={mode}
                    exclusive
                    onChange={toggleTheme}
                    aria-label="theme mode"
                >
                    <ToggleButton value="light" aria-label="light mode">
                        <Brightness7Icon />
                        Light
                    </ToggleButton>
                    <ToggleButton value="system" aria-label="system mode">
                        <SettingsBrightnessIcon />
                        System
                    </ToggleButton>
                    <ToggleButton value="dark" aria-label="dark mode">
                        <Brightness4Icon />
                        Dark
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <SearchForm setResults={setResults} />
            <Results results={results} />
        </Container>
    );
};

export default App;
