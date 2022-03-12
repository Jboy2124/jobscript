import React from 'react'
import img from '../images/home-images/hero_banner-removebg-preview.png'
import {makeStyles} from "@mui/styles";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



const HeroBanner = () => {
  const useStyles = makeStyles((theme) => (
    {
        heading: 
        {
            fontSize: "48px", 
            fontWeight: "bolder",
        }
    }));

    const classes = useStyles();
  
  return (
        <div className='container'> 
            <div className='container pt-5'> 
                <div className="row pt-5 mt-5">
                    <div className="col-md-6 col-xs-5">
                        <br/>            
                        <h1 className={classes.heading}>Job Opportunites. <br/>
                        Outstanding Developers. <br/> 
                        All in one Place.
                        </h1>
                        <p className="mb-5">Helping facilitate the matching and communication<br/> of job opportunities between jobseekers and employers.</p>

                        <Link to="/Employer">
                            <button type="button" className="btn btn-danger ms-2">Employer</button>
                        </Link>
                        <Link to="Jobseeker">
                            <button type="button" className="btn btn-outline-danger  ms-2 d-inline-block ">Job Seeker</button>
                        </Link>
                    </div>
                    <div className="col-md-6 col-xs-5">
                        <img className="w-100 h-100" src={img}></img>
                    </div>
                </div>
            </div> 
                   
        </div>
       
    

  )
}

export default HeroBanner