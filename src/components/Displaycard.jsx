import React from 'react'
import JobSeeker from '../images/home-images/hero-img-1.jpg'
import Employer from '../images/home-images/hero-img-2.jpg'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const Displaycard = (props) => {
  return (
    <Card className='cards' sx={{ width: 280, boxShadow: "0px 0px 2px 1px #e63c3c" }}>
        <CardMedia component="img" alt='' height="200" image={JobSeeker}/>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">{props.title}</Typography>
            <Typography variant="body2" color="text.secondary">{props.description}</Typography>
        </CardContent>
        <CardActions>
            <Button>See more</Button>
        </CardActions>
    </Card>
  )
}

export default Displaycard