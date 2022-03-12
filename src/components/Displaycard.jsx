import React from 'react'
import JobSeeker from '../images/home-images/hero-img-1.jpg'
import '../css/developer.css'


const Displaycard = (props) => {
  let imgPath = "";
  switch(props.id) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      imgPath = "../images/home-images/hero-img-1.jpg"
      break;
  }

  const viewPortfolio = () => {
    window.open(props.portfolio, "");
  }

  return (
    <div id='card-container' className="container">
      <div className="card">
        <img src={JobSeeker} alt="Job Seeker" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          {/* <button onClick={viewPortfolio} className="btn btn-primary">Show more</button> */}
          <button type="button" onClick={viewPortfolio}  class="btn btn-outline-danger">Show more</button>
        </div>
      </div>
    </div>
  )
}

export default Displaycard