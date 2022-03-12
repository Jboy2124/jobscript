import React from 'react'
import '../css/developer.css'
import Cards from '../components/Displaycard'
import Datalist from '../data-model/DataList'

const TheDeveloper = () => {
  return (
    <div className="container-fluid">
      <div id='card-container' className='container'>
        <div className="row">
          {Datalist.map((items) => {
            return (<div className='col pt-3'> <Cards imgPath={items.imgPath} title={items.title} description={items.description} portfolio={items.portfolio}/></div>)
          })}
        </div>
      </div>
      <div id='team-footer' className="row"></div>
      <div id='meetTheTeamFooter' className="row"></div>
    </div>
    
  )
}

export default TheDeveloper