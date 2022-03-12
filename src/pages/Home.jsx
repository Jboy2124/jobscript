import React from 'react'
import Grid from '@mui/material/Grid';
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
      {/* <Grid className='grid' container>
        <Grid className='hero-text' item xs={12} sm={6}>
          <p>Job Opportunities.</p>
          <p>Outstanding Developers.</p>
          <p className='under'>All in One Place.</p>
        </Grid>
        <Grid className='img-js-container' item xs={12} sm={3}>
          <h5 className='js-title'>Job Seeker</h5>
          <img className='img-js' src={JobSeeker} alt="Job Seeker" />
        </Grid>
        <Grid className='img-em-container' item xs={12} sm={3}>
          <img className='img-em' src={Employer} alt="Employer" />
          <h5 className='em-title'>Find Talent</h5>
        </Grid>

        <Grid className='under-hero' container></Grid>

        <Grid className='card-people' container>
          <div className='cards'>
            {contentForCard}
          </div>
        </Grid>
      </Grid> */}

    </div>
  )
}

export default Home