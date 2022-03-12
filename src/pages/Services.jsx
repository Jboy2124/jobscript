import React from 'react'
import img2 from '../images/home-images/Employer.jpg'
import img3 from '../images/home-images/JobSeeker.jpg'

import {makeStyles} from "@mui/styles";
import Testimonials from '../components/Testimonials';


const Services = () => {
  const useStyles = makeStyles((theme) => (
    {
        topic: 
        {
            fontSize: "32px", 
            textAlign: "center",
            fontWeight: "600",
            margin: "0"
        },
        subtopic: 
        {
            fontSize: "14px", 
            textAlign: "center",
            color: "#e63c3c",
            margin: "0"
        }

    }));

    const classes = useStyles();
  return (
    <div className='container'> 
        <div className="row pt-5 border">
            <div className="col-md-12 col-xs-5">
                <p className={classes.subtopic}>OFFERING  </p>
                <p className={classes.topic}>Services</p>
            </div>
            <div className="col-md-6 col-xs-5">
                <p className={classes.topic}>Job Posting  </p>
                <p >Reach your next hire faster. <br/>Get relevant responses to your job ads with our new age technology.
                    Looking to post a job online? You are at the right place. Monster provides online job posting service for regions across India, Middle East and South East Asia.
                    For employers and professionals who are well-versed in recruiting and hiring talent for a business, it is often found that hiring is one of the most complex, laborious and time-consuming tasks that they face. With Monster Job Posting and other hiring solutions, we make it easy for you to Find Better candidates and hire them faster.
                    We offer the following job posting packages:
                    Quick Job Posting
                    Premium Job Posting
                    Response management, logo with job posting, print alliance, and highlighting your job posting are some of the features available to a recruiter basis the package he chooses.
                </p>
               
            </div>
            <div className="col-md-6 col-xs-5">
                <img className="w-100 h-100" src={img2}></img>
            </div>
        </div>   
        <div className="row pt-5 border">
            <div className="col-md-6 col-xs-5">
                <img className="w-100 h-100" src={img3}></img>
            </div>
            <div className="col-md-6 col-xs-5">
            <p className={classes.subtopic}>OFFERING  </p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
        </div>
        <Testimonials />
    </div>
  )
}

export default Services