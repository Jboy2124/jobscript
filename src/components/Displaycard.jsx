import React from 'react'
import JobSeeker from '../images/home-images/hero-img-1.jpg'
// import Employer from '../images/home-images/hero-img-2.jpg'

const Displaycard = (props) => {
  return (
    <div className="container-fluid">
      <div className="card">
        <img src={JobSeeker} alt="Job Seeker" className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">Show more</a>
        </div>
      </div>
    </div>
  )
}

export default Displaycard