import React from 'react'
import '../css/developer.css'
import Cards from '../components/Displaycard'
import Datalist from '../data-model/DataList'
import DHA from '../images/the-team/dan.png'
import ES from '../images/the-team/beth.png'
import JBA from '../images/the-team/jufel.png'




const TheDeveloper = () => {
  return (
    <div id='card-container' className='container-fluid'>
      <div id='dev-cards' className='row'>
        {/* {Datalist.map((items) => {
            return(<Cards title={items.title} description={items.description} portfolio={items.portfolio}/>)
        })} */}
        <div class="card">
          <img src={ES} height="280" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Elizabeth Santos</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" onClick={() => {
              window.open("https://ecsantos1990.github.io/portfolio/", "");
            }} class="btn btn-outline-danger">Portfolio</button>
          </div>
        </div>
        <div class="card">
          <img src={DHA} height="280" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Dan Harry Apalis</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" class="btn btn-outline-danger">Portfolio</button>
          </div>
        </div>
        <div class="card">
          <img src={JBA} height="280" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Jufel Abecia</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button type="button" onClick={() => {
              window.open("https://jufel-portfolio.herokuapp.com/#home","");
            }} class="btn btn-outline-danger">Portfolio</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheDeveloper