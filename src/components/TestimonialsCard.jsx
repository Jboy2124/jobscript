import React from 'react'
import '../css/testimonials.css'

const TestimonialsCard = (props) => {
  return (
    <div className='container'>
        <div className="row">
            <div id='testimonial-card-design' className="card">
                    <div className="card-body">
                        <p id='testimonials-card-text' className='card-text'>{props.testimonial}</p>
                    </div>
                <div className='row'>
                  <div className="col-sm-12 d-flex">
                    <img id='testimonials-img' src={props.img} alt="" className="card-img-bottom"/>
                    <p id='col-name' className='card-title pt-2'>{props.name}<br/>{props.type}</p>
                  </div>
                  {/* <div id='col-name' className="col-sm-8">
                   
                  </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard