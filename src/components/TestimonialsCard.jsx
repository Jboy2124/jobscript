import React from 'react'

const TestimonialsCard = (props) => {
  return (
    <div className='container'>
        <div className="row">
            <div className="card">
                <img src={props.img} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className='card-title'>{props.name}</h5>
                    <p className='card-text'>{props.testimonial}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsCard