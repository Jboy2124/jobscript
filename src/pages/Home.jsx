import React from 'react'

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