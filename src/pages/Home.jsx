import React from 'react'
// import JobSeeker from '../images/home-images/hero-img-1.jpg'
// import Employer from '../images/home-images/hero-img-2.jpg'
// import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Displaycard from '../components/Displaycard';
import CardData from '../data-model/DataList';
import HeroBanner from '../components/HeroBanner'


let contentForCard = CardData.map((items) => {
  return <Displaycard title={items.title} description={items.description}/>
});

const Home = () => {
  return (
    <div className='container'>
      <HeroBanner />
      
    </div>
  )
}

export default Home