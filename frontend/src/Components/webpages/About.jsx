import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardHeader, CardMedia } from '@mui/material';
import { FastForward, AccessTime, SupportAgent } from '@mui/icons-material';
import './About.scss'; // Import your SCSS file
import img1 from '../Images/images-Gride.jpg'
function AboutPage() {
    return (
        <Container className="container">
        <div className='class1'>
        <CardMedia
                component="img"
                alt="Flight Booking System"
                height="50"
                image={img1} // Replace with the actual image path
            />
        </div>
           <div className='class2'> 
           <Typography variant="h3" gutterBottom>
                About Our Flight Booking System
            </Typography>
            <hr className="hr" />
            <Typography variant="body1" className="body1">
                Welcome to our state-of-the-art Flight Booking System. We're dedicated to providing you with a seamless booking experience.
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12} sm={4} className="grid-item">
                    <Card className="card">
                        <CardHeader
                            title="Fast and Easy Booking"
                            titleTypographyProps={{ variant: 'h5' }}
                            avatar={<FastForward fontSize="large" className="icon" />}
                        />
                        <CardContent className="card-content">
                            Our system offers quick and hassle-free flight booking to save your time and effort.
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} className="grid-item">
                    <Card className="card">
                        <CardHeader
                            title="Any Time Anywhere"
                            titleTypographyProps={{ variant: 'h5' }}
                            avatar={<AccessTime fontSize="large" className="icon" />}
                        />
                        <CardContent className="card-content">
                            You can book flights at your convenience, 24/7, from anywhere in the world.
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4} className="grid-item">
                    <Card className="card">
                        <CardHeader
                            title="24/7 Support"
                            titleTypographyProps={{ variant: 'h5' }}
                            avatar={<SupportAgent fontSize="large" className="icon" />}
                        />
                        <CardContent className="card-content">
                            Our support team is available around the clock to assist you with any inquiries or issues.
                        </CardContent>
                    </Card>
                </Grid>
            </Grid></div>
        </Container>
    );
}

export default AboutPage;
