import React from 'react'
import JobSeekerTestimonials from '../data-model/JobSeekerTestimonials'
import EmployerTestimonials from '../data-model/EmployerTestimonials'
import TestimonialsCard from './TestimonialsCard'


const Testimonials = () => {
  return (
    <div id='services-testimonial' className='container'>
      <h2 className="serviceHeading">Testimonials</h2><br/><br/>
        <div className="row">
        { 
            JobSeekerTestimonials.map((items) => {
              return(
                <div className="col pb-5">
                  <TestimonialsCard testimonialid={items.id} testimonial={items.testimonial} type={items.type} name={items.name} img={items.imgPath} />
                </div>
              )
            })
        }
        </div>
        <div className="row">
          {
            EmployerTestimonials.map((items) => {
              return (
                <div className="col pb-5">
                  <TestimonialsCard testimonialid={items.id} testimonial={items.testimonial} type={items.type} name={items.name} img={items.imgPath}/>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Testimonials