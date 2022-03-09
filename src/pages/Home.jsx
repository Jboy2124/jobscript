import React from 'react'
import Grid from '@mui/material/Grid';
import JobSeeker from '../images/home-images/JobSeeker.jpg'
import Employer from '../images/home-images/Employer.jpg'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';


const Home = () => {
  return (
    <div className='home-container'>
      <Grid className='grid' container>
        <Grid item xs={12} sm={6} sx={{ border: "1px solid black" }}>
          <h1>Job Opportunities.</h1>
          <h1>Outstanding Developers.</h1>
          <h1>All in One Place.</h1>
        </Grid>
        <Grid className='img-js-container' item xs={12} sm={3}>
          <Card>
            <CardMedia component="img" height="200" alt='Job Seeker' image={JobSeeker}/>
            <CardContent>
              <Typography variant='h5' >Job Seeker</Typography>
            </CardContent>
            <CardActions>
              <Button size='medium'>Open</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid className='img-em-container' item xs={12} sm={3}>
        <Card>
            <CardMedia component="img" height="200" alt='Job Seeker' image={Employer}/>
            <CardContent>
              <Typography variant='h5' >Find Talent</Typography>
            </CardContent>
            <CardActions>
              <Button size='medium'>Open</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home