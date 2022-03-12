import React from 'react'
import JobSeekerTestimonials from '../data-model/JobSeekerTestimonials'
import EmployerTestimonials from '../data-model/EmployerTestimonials'
import TestimonialsCard from './TestimonialsCard'


const Testimonials = () => {
  return (
    <div className='container'>
        <div className="row">
        { 
            JobSeekerTestimonials.map((items) => {
              return(
                <div className="col">
                  <TestimonialsCard testimonial={items.testimonial} name={items.name} img={items.imgPath} />
                </div>
              )
            })
        }
        </div>

        <div className="row">
          {
            EmployerTestimonials.map((items) => {
              return (
                <div className="col">
                  <TestimonialsCard testimonial={items.testimonial} name={items.name} img={items.imgPath}/>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Testimonials