import React from 'react'
import img2 from '../images/home-images/Employer.jpg'
import img3 from '../images/home-images/JobSeeker.jpg'
import '../css/testimonials.css'

import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';



const Services = () => {

  return (
    <div className='container-fluid p-0'> 
        <div className="container">
            <div className="row pt-5 ">
                <div className="col-md-12 col-xs-6 ">
                    <h2 className="serviceHeading">Services</h2>
                </div>
                <div className="containerInner">
                    <div className="containerForServices ">
                            <p className= 'serviceTopicEmployer'> Employers </p>
                            <h2 className='serviceTopic'>RDA with Semantic Search 2.0</h2>
                            <p className='description'>Find your next hire with all new RDA powered by Semantic Search 2.0 technology that makes it easy and quick to find the talent matching your requirements.</p>
                            
                            <h2 className='serviceTopic'>Job Posting</h2>
                            <p className='description'>Reach your next hire faster. Get relevant responses to your job ads with our new age technology..</p>
                            
                            <h2 className='serviceTopic'>Social Job Ads </h2>
                            <p className='description'>Use the power of Social Job Ads to take your job posting to a large pool of active and passive job seekers on social media & beyond. Find Better, Faster</p>

                            <h2 className='serviceTopic'>Branding Solutions</h2>
                            <p className='description'>Expand the reach of your employer brand with JobScript's Branding Solutions. Showcase your products & offerings to the audience of your choice.</p>
                    </div> 
                    <div className="containerForServices ">
                        <img className="img-fluid" src={img2} alt="put some text here"></img>
                    </div>   
                </div>
            </div>
            <div className="row pt-5">
                <div className="containerInner">
                    <div className="containerForServices ">
                        <img className="img-fluid" src={img3} alt="put some text here"></img>
                    </div> 
                    <div className="containerForServices ">
                    <p className= 'serviceTopicEmployerRight'> Job Seeker </p>
                            <h2 className='serviceTopicRight'>Featured Profile</h2>
                            <p className='descriptionRight'>Your profile is upfront when recruiters search candidate like you.</p>
                            
                            <h2 className='serviceTopicRight'>Resume Writing</h2>
                            <p className='descriptionRight'>Professionally written resume + cover letter.</p>
                            
                            <h2 className='serviceTopicRight'>Career Booster </h2>
                            <p className='descriptionRight'>Get the power of two in one and speed up your job search</p>

                            <h2 className='serviceTopicRight'>Profile Highlighter</h2>
                            <p className='descriptionRight'>Turns the spotlight on you during the candidate search by employer</p>
                        
                    </div>   
                </div>
            </div>
        </div>  
        <div data-aos="fade-up" className="container">
            <div  className='row'>
                <div className="col">
                    <Testimonials />
                </div>
            </div>
        </div>
        <div className="container-fluid p-0">
            <Footer />
        </div>
    </div>
  )
}

export default Services