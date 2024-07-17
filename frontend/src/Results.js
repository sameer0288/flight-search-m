import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Box } from '@mui/material';

const Results = ({ results }) => {
    if (!results || results.length === 0) {
        return <Typography variant="h6">Try another search route.</Typography>;
    }

    return (
        <Container style={{marginTop:"2rem"}}>
            <Grid container spacing={2} justifyContent="center">
                {results.map((result, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card variant="outlined" style={{ backgroundColor: '#0d4215', color: 'white' }}>
                            <CardContent>
                                <Box display="flex" justifyContent="center" mb={1}>
                                    <img src="path/to/dummy/logo.png" alt="Logo" style={{ maxWidth: '50px' }} />
                                </Box>
                                <Typography variant="h6" align="center">{result.partner_program}</Typography>
                              
                                <Typography align="center">{`SYD -> JFK\n2024-07-09 -> 2024-10-07`}</Typography>
                                <Box mt={2}>
                                    <Typography align="center">
                                        {`Min Business Miles: ${result.min_business_miles || 'N/A'} + $${result.min_business_tax || 'N/A'}`}
                                    </Typography>
                                    <Typography align="center">
                                        {`Min Economy Miles: ${result.min_economy_miles || 'N/A'} + $${result.min_economy_tax || 'N/A'}`}
                                    </Typography>
                                    <Typography align="center">
                                        {`Min First Miles: ${result.min_first_miles || 'N/A'} + $${result.min_first_tax || 'N/A'}`}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Results;
