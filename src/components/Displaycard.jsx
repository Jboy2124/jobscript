import React from 'react'
import '../css/developer.css'


const Displaycard = (props) => {
 
  const viewPortfolio = () => {
    window.open(props.portfolio, "");
  }

  return (
    <div className="container">
      <div className='row'>
        <div id='developer-card' className="card">
          <img src={props.imgPath} height="280" alt="No image" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button type="button" onClick={viewPortfolio}  className="btn btn-outline-danger">Show more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Displaycard