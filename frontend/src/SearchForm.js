import React, { useState } from 'react';
import { TextField, MenuItem, Button, FormControl, InputLabel, Select, Container, Typography, Grid } from '@mui/material';
import axios from 'axios';

const SearchForm = ({ setResults }) => {
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [cabin, setCabin] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://flight-search-backend.vercel.app/search', {
                origin,
                destination,
                cabinSelection: cabin
            });
            setResults(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Choose Origin & Destination Airports:
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="origin-label">Origin</InputLabel>
                            <Select
                                labelId="origin-label"
                                value={origin}
                                onChange={(e) => setOrigin(e.target.value)}
                                label="Origin"
                            
                            >
                                {['JFK', 'DEL', 'SYD', 'BOM', 'BNE', 'BLR'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="destination-label">Destination</InputLabel>
                            <Select
                                labelId="destination-label"
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                label="Destination"
                            >
                                {['JFK', 'DEL', 'SYD', 'LHR', 'CDG', 'DOH', 'SIN'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="cabin-label">Cabin Selection</InputLabel>
                            <Select
                                labelId="cabin-label"
                                value={cabin}
                                onChange={(e) => setCabin(e.target.value)}
                                label="Cabin Selection"
                            >
                                {['Economy', 'Business', 'First'].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default SearchForm;
