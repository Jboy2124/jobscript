import React from 'react'
import JobSeekerTestimonials from '../data-model/JobSeekerTestimonials'
import EmployerTestimonials from '../data-model/EmployerTestimonials'
import TestimonialsCard from './TestimonialsCard'


const Testimonials = () => {
  return (
    <div id='services-testimonial' className='container'>
      <h4 className='text-center py-5'>Testimonials</h4>
        <div className="row">
        { 
            JobSeekerTestimonials.map((items) => {
              return(
                <div className="col pb-5">
                  <TestimonialsCard testimonial={items.testimonial} type={items.type} name={items.name} img={items.imgPath} />
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
                  <TestimonialsCard testimonial={items.testimonial} type={items.type} name={items.name} img={items.imgPath}/>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default Testimonials