import React from 'react'
import img2 from '../images/home-images/Employer.jpg'
import img3 from '../images/home-images/JobSeeker.jpg'


import {makeStyles} from "@mui/styles";


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
        <div class="row pt-5 border">
            <div class="col-md-12 col-xs-5">
                <p className={classes.subtopic}>OFFERING  </p>
                <p className={classes.topic}>Services</p>
            </div>
            <div class="col-md-6 col-xs-5">
                <p className={classes.subtopic}>OFFERING  </p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
            <div class="col-md-6 col-xs-5">
                <img class="w-100 h-100" src={img2}></img>
            </div>
        </div>   
        <div class="row pt-5 border">
            <div class="col-md-6 col-xs-5">
                <img class="w-100 h-100" src={img3}></img>
            </div>
            <div class="col-md-6 col-xs-5">
            <p className={classes.subtopic}>OFFERING  </p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
        </div>  
    </div>
  )
}

export default Services