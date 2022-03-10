import React from 'react'
import '../css/developer.css'
import Cards from '../components/Displaycard'
import Datalist from '../data-model/DataList'

const TheDeveloper = () => {
  return (
    <div id='card-container' className='container'>
      <div className='dev-cards'>
      {Datalist.map((items) => {
          return(<Cards title={items.title} description={items.description}/>)
        })}
      </div>
    </div>
  )
}

export default TheDeveloper