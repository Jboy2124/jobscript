import React from 'react'
import img from '../images/home-images/hero_banner-removebg-preview.png'
import '../css/homepage.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const HeroBanner = () => {

  return (
        <div id='hero-banner-page-main-container' className='container'> 
            <div className='container'> 
                <div className="row mt-5 homepageContainer">
                    <div className="col-md-6 col-xs-5 ">
                        <br/>            
                        <h1 className="homepageH1">Job Opportunites. <br/>
                        Outstanding Developers. <br/> 
                        All in one Place.
                        </h1>
                        <p className="mb-5 homepageText">
                        Born in 2022. Developed for our times.<br/><br/>
                        Helping facilitate the matching and communication<br/> 
                        of job opportunities between jobseekers and employers.
                        </p>

                        <Link to="/Employer">
                            <button type="button" className="btn btn-danger ms-2 homepageButton">Employer</button>
                        </Link>
                        <Link to="Jobseeker">
                            <button type="button" className="btn btn-outline-danger homepageButton ms-2 d-inline-block ">Job Seeker</button>
                        </Link>
                    </div>
                    <div className="col-md-6 col-xs-5 m-auto pt-5">
                        <img className="w-100 h-100 homepageImg" src={img}></img>
                    </div>
                </div>
            </div> 
                   
        </div>

    // </div>
  )
}

export default HeroBanner