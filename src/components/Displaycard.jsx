import React from 'react'
import JobSeeker from '../images/home-images/hero-img-1.jpg'
import Employer from '../images/home-images/hero-img-2.jpg'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const Displaycard = () => {
  return (
    <Card className='cards' sx={{ maxWidth: 345, boxShadow: "0px 0px 2px 1px #e63c3c" }}>
        <CardMedia component="img" alt='' height="180" width="300" image={JobSeeker}/>
        <CardContent>
            <h1>Hi</h1>
        </CardContent>
        <CardActions>
            <Button>See more</Button>
        </CardActions>
    </Card>
  )
}

export default Displaycard