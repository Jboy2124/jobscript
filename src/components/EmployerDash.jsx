import React, { useState, useEffect } from 'react'
import { Offcanvas } from 'react-bootstrap'
import '../css/jobseekerdash.css'
import EmployerDashCards from './EmployerDashCards';
import DeveloperList from '../data-model/DeveloperList';
import Footer from './Footer';
import { Link } from "react-router-dom";

const EmployerDash = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const handlesEvent = (passedID) => {
      for (const key in DeveloperList) {
        if (DeveloperList[key].id == passedID) {
         // alert("Full Details: JobID: " + DeveloperList[key].id +" "+ DeveloperList[key].category +" "+ DeveloperList[key].jobTitle +" "+ DeveloperList[key].jobSnippet)
         alert("hello")
        }
      }
    }
   
 
    return (
      <div className="container-fluid p-0">
          <div id='header-filter' className='container d-flex justify-content-between'>
            <button type='button' className='btn btn-primary' onClick={handleShow}>Launch</button>
            <div class="dropdown">
                              
                              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-user"></i>     Account
                              </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                   <h4>Chito Miranda</h4>
                                   <p className="text-danger">Employer</p>
                                </a>
                                <a class="dropdown-item" > <i className="fa fa-user"></i> My Profile</a>
                                <a class="dropdown-item" > <i className="fa fa-folder"></i> Posted Jobs</a>
                                <a class="dropdown-item" > <i className="fa fa-cog"></i> Account Settings</a>
                                <Link to="/Employer" class="dropdown-item" >
                                  <i class="fa fa-arrow-left"></i>  Log Out
                                </Link>
                              </div>
            </div>
          </div>
          <div id='card-display-container' className="container pb-5">
            <div className="row">
              {
                DeveloperList.map((items) => {
                  return (
                    <div id='display-card-columns' className="col">
                      <EmployerDashCards handlesJobClickEvent={handlesEvent} 
                                id={items.id} 
                                category={items.devMainRole} 
                                devImg={items.devImg} 
                                title={items.devName} 
                                location={items.devLocation} 
                                skillset={items.skillSet}
                                skillset2={items.skillSet2}
                                skillset3={items.skillSet3}
                                />
                    </div>
                  )
                })
              }
            </div>

          </div>

          <div className="container-fluid p-0">
            <Footer />
          </div>
        
          
         <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
                <div>
                  <h5>Body</h5>
                </div>
            </Offcanvas.Body>
          </Offcanvas>
          
      </div>
    )
}

export default EmployerDash