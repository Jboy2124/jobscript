import React from 'react'
import img from '../images/home-images/hero_banner-removebg-preview.png'
import {makeStyles} from "@mui/styles";

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
        <div class="row pt-5 mt-5">
            <div class="col-md-6 col-xs-5">
                <br/>            
                <h1 className={classes.heading}>Job Opportunites. <br/>
                Outstanding Developers. <br/> 
                All in one Place.
                </h1>
                <p class="mb-5">Helping facilitate the matching and communication<br/> of job opportunities between jobseekers and employers.</p>
                <a href="https://ecsantos1990.github.io/"><button type="button" class="btn btn-danger ms-2">Employer</button></a>
                <a href="https://ecsantos1990.github.io/"><button type="button" class="btn btn-outline-danger  ms-2 d-inline-block ">Job Seeker</button></a>
            </div>
            <div class="col-md-6 col-xs-5">
                <img class="w-100 h-100" src={img}></img>
            </div>
            </div>   
        </div>

  )
}

export default HeroBanner