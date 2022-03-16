import React, { useState, useRef } from 'react'
import { Offcanvas, Modal, Button } from 'react-bootstrap'
import '../css/jobseekerdash.css'
import JobSeekerDashCards from './JobSeekerDashCards';
import JobList from '../data-model/JobList';
import Footer from './Footer';
let salaryValue = 0;
let arrayJobDetails = [];



const JobSeekerDash = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showModal, setShowModal] = useState(false);
  const [searchJob, setSearchJob] = useState("");
  let txtSearch = useRef(null);
  
  //This will get the ID of the  selected card
  // and filter it and assign it to the array
  const handlesShowModal = (clickedCardValue) => {
    setShowModal(clickedCardValue[1]);
    arrayJobDetails = JobList.filter(item => item.id == clickedCardValue[0]).map(list => { return list });
  }

  
  //This will get the value of the text
  //on every input (onchange evemt)
  let searchJobList = (e) => {
    e.preventDefault();
    setSearchJob(txtSearch.current.value);
  }

    return (
      <div className="container-fluid p-0">
          <div id='header-filter' className='container'>
            <div className="search-container">
              <div className="input-group">
                <input id='text-search-box' type="text" ref={txtSearch} className="form-control" onChange={searchJobList} placeholder="Search Job..."></input>
                <button className="btn btn-outline-danger" type="button"><i className='bi bi-search'></i></button>
              </div>
            </div>
            
          </div>
          <div id='card-display-container' className="container pb-5">
            <div className="row">
              {
                JobList.filter((i) => {
                  if(txtSearch == ""){
                    return i
                  }else if (i.category.toLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.aor.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.employmentStatus.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.jobTitle.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase())){
                    return i
                  }
                }).map((items) => {
                  return (
                    <div id='display-card-columns' className="col">
                      <JobSeekerDashCards handlesShowModal={handlesShowModal} 
                                id={items.id} 
                                category={items.category} 
                                title={items.jobTitle} 
                                snippets={items.jobSnippet} 
                                showData={true}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="container-fluid p-0">
            <Footer />
          </div>



            { arrayJobDetails.map((items) => {
                salaryValue = parseFloat(items.salary).toLocaleString(undefined, {maximumFractionDigits: 2});
                return (
                  <Modal show={showModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header className='modal-header'>
                      <Modal.Title className='modal-title'>ABOUT THE JOB IN DETAILS</Modal.Title>
                      <div className='modal-tag'>
                        <p>{items.category}</p>
                      </div>
                    </Modal.Header>
                      <Modal.Body className='modal-body'>
                        <h5>{items.jobTitle} ({items.employmentStatus})</h5>
                        <p className='modal-body-company' >{items.company}</p>
                        <p className='modal-body-address'>{items.address}</p>
                        <p className='modal-body-contact'>Contact: {items.ein} / Email: {items.companyEmail}</p>
                        <p className='modal-body-salary'>Salary: {(items.salary) ? salaryValue : "Not Specified"}</p>
                        <p className='modal-body-aor'>{items.aor}</p>
                        <hr />
                        <h6 className='modal-qualification-header'>Job Overview</h6>
                          <ul className='modal-requirements'>
                            {
                              items.jobDescription.map(i => {
                                return ( <li>{i}</li> )
                              })
                            }
                          </ul>

                          <h6 className='modal-qualification-header'>Skills Summary</h6>
                          <ul className='modal-requirements'>
                            {
                              items.skills.map(s => {
                                return (<li>{s}</li> )
                              })
                            }
                          </ul>
                      </Modal.Body>
                    <Modal.Footer>
                      <button className='btn btn-outline-danger' onClick={() => setShowModal(false)}>Close</button>
                      </Modal.Footer>
                  </Modal> 
                )
              })
            }

            {/* <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body >
                  <div style={{width: "10px"}}>
                    <h5>Body</h5>
                  </div>
              </Offcanvas.Body>
            </Offcanvas>  */}
      </div>
    )
}

export default JobSeekerDash