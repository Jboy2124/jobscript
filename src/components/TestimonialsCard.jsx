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
                <div className='row pb-3'>
                  <div key={props.id} className="col-sm-12 d-flex">
                    <img id='testimonials-img' src={props.img} alt="" className="card-img-bottom rounded-circle img-thumbnail"/>
                    <p id='col-name' className='card-title pt-2'>{props.name}<br/>{props.type}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard