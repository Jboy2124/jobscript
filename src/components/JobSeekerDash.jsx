import React, { useState, useEffect } from 'react'
import { Offcanvas } from 'react-bootstrap'
import '../css/jobseekerdash.css'
import JobSeekerDashCards from './JobSeekerDashCards';
import JobList from '../data-model/JobList';
import Footer from './Footer';
import DisplayModal from './DisplayModal';





const JobSeekerDash = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModal, setShowModal] = useState(false);
  
  
  const handlesEvent = (passedID) => {
    
    for (const key in JobList) {
      if (JobList[key].id == passedID) {
        setShowModal(true);
        // alert("Full Details: JobID: " + JobList[key].id +" "+ JobList[key].category +" "+ JobList[key].jobTitle +" "+ JobList[key].jobSnippet)
      }
    }  
  }


  // let handleModalEvent = () => setShowModal(true);

    return (
      <div className="container-fluid p-0">
          <div id='header-filter' className='container'>
            <button type='button' className='btn btn-primary' onClick={handleShow}>Launch</button>
          </div>
          <div id='card-display-container' className="container pb-5">
            <div className="row">
              {
                JobList.map((items) => {
                  return (
                    <div id='display-card-columns' className="col">
                      <JobSeekerDashCards handlesJobClickEvent={handlesEvent} id={items.id} category={items.category} title={items.jobTitle} snippets={items.jobSnippet}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="container-fluid p-0">
            <Footer />
          </div>


          <DisplayModal showModal={showModal} />
        
          


     

          
         {/* <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
                <div>
                  <h5>Body</h5>
                </div>
            </Offcanvas.Body>
          </Offcanvas> */}
          
      </div>
    )
}

export default JobSeekerDash