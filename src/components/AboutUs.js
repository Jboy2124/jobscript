import React from 'react'
import '../css/aboutstyles.css'

const AboutUs = () => {
  return (
    <div className='about-section'>
        <section className='inner-container'>
            <h1>About Us</h1>
            <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit nemo esse magni nisi quo perferendis est, tenetur minima cumque doloribus optio distinctio? Voluptatibus veniam est fugiat quasi odit, ipsum laboriosam.
            </p>
            <nav className='skills'>
                <span>Web Design</span>
                <span>Web Development</span>
                <span>App Development</span>
            </nav>
        </section>
    </div>
  )
}

export default AboutUs