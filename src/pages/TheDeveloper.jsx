import React from 'react'
import '../css/developer.css'
import Cards from '../components/Displaycard'
import Datalist from '../data-model/DataList'
import Footer from '../components/Footer'

const TheDeveloper = () => {
  return (
    <div className="container-fluid ">
      <div className="row pb-2">
            <div className="col-md-12 col-xs-6 ">
                    <h2 className="serviceHeading">Meet the Team</h2>
                    <p className="homepageText text-center">
                        A passionate team making JobScript better.
                    </p>
            </div>
      </div>
      <div id='card-container' className='container ' >
        <div className="row pb-5">
          {Datalist.map((items) => {
            return (<div className='col ' > <Cards imgPath={items.imgPath} title={items.title} description={items.description} portfolio={items.portfolio}/></div>)
          })}
        </div>
      </div>
      <div className="container-fluid p-0">
        <Footer />
      </div>

    </div>
  )
}

export default TheDeveloper