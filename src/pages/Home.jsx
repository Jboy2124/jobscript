import React from 'react'
import Grid from '@mui/material/Grid';
import JobSeeker from '../images/home-images/hero-img-1.jpg'
import Employer from '../images/home-images/hero-img-2.jpg'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Displaycard from '../components/Displaycard';


const Home = () => {
  return (
    <div className='home-container'>
      <Grid className='grid' container>
        <Grid className='hero-text' item xs={12} sm={6}>
          <p>Job Opportunities.</p>
          <p>Outstanding Developers.</p>
          <p>All in One Place.</p>
        </Grid>
        <Grid className='img-js-container' item xs={12} sm={3}>
          <h5 className='js-title'>Job Seeker</h5>
          <img className='img-js' src={JobSeeker} alt="Job Seeker" />
        </Grid>
        <Grid className='img-em-container' item xs={12} sm={3}>
          <img className='img-em' src={Employer} alt="Employer" />
          <h5 className='em-title'>Find Talent</h5>
        </Grid>


        <Grid className='under-hero' container>
          <Grid item xs={12} sm={12}></Grid>
        </Grid>

        <Grid className='card-people' container justifyContent="center">
         
        </Grid>


      </Grid>

    </div>
  )
}

export default Home