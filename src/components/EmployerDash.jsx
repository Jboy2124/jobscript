import React, { useState, useRef } from 'react'
import '../css/jobseekerdash.css'
import { Modal, Button } from 'react-bootstrap'
import EmployerDashCards from './EmployerDashCards';
import DeveloperList from '../data-model/DeveloperList';
import Footer from './Footer';
import { Link } from "react-router-dom";
let arrayJobDetails = [];
let salaryValue = 0;

const EmployerDash = () => {

  const existingUser = JSON.parse(localStorage.getItem('RegisterEmployerDetails'));
  let employerUser = "";

  for (const key in existingUser) {
    employerUser = existingUser[key].personName;
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchJob, setSearchJob] = useState("");
  const [showModal, setShowModal] = useState(false);
  let txtSearch = useRef(null);

  const handlesShowModal = (clickedCardValue) => {
    setShowModal(clickedCardValue[1]);
    arrayJobDetails = DeveloperList.filter(item => item.id == clickedCardValue[0]).map(list => { return list });
  }

    let searchJobList = (e) => {
      e.preventDefault();
      setSearchJob(txtSearch.current.value);
    }
   
 
    return (
      <div className="container-fluid p-0">
          <div id='header-filter' className='container d-flex justify-content-between'>
            { <div className="search-container searchboxEmployer">
                <div className="input-group">
                    <input type="text" ref={txtSearch} className="form-control  " onChange={searchJobList} placeholder="Search Devs..."></input>
                    <button className="btn btn-outline-danger" type="button"><i className='bi bi-search'></i></button>
                </div>
            </div> }
            {/* <button type='button' className='btn btn-primary' onClick={handleShow}>Launch</button> */}
            <div className="dropdown">
                              
                              <button className="btn btn-secondary dropdown-toggle buttonStyleEmployer" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-user"></i>     Account
                              </button>
                              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">
                                   <h4>{employerUser}</h4>
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
                DeveloperList.filter((i) => {
                  if(txtSearch == ""){
                    return i
                  }else if (i.devMainRole.toLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.skillSet.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.devLocation.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.skillSet2.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.skillSet3.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase()) || 
                            i.skillSet.toLocaleLowerCase().includes(searchJob.toLocaleLowerCase())){
                    return i
                  }
                }).map((items) => {
                  return (
                    <div id='display-card-columns' className="col">
                      <EmployerDashCards handlesShowModal={handlesShowModal} 
                                id={items.id} 
                                category={items.devMainRole} 
                                devImg={items.devImg} 
                                title={items.devName} 
                                location={items.devLocation} 
                                skillset={items.skillSet}
                                skillset2={items.skillSet2}
                                skillset3={items.skillSet3}
                                showData={true}
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

{/*           
         <Offcanvas show={show} onHide={handleClose}>
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

export default EmployerDash