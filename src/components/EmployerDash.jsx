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
  const [searchJob, setSearchJob] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalMessage, setShowModalMessage] = useState(false);
  let txtSearch = useRef(null);

  const handlesShowModal = (clickedCardValue) => {
    setShowModal(clickedCardValue[1]);
    arrayJobDetails = DeveloperList.filter(item => item.id == clickedCardValue[0]).map(list => { return list });
    console.log(arrayJobDetails);
  }

  const showMessageEvent = (passedValue) => {
    setShowModalMessage(passedValue);
  }

    let searchJobList = (e) => {
      e.preventDefault();
      setSearchJob(txtSearch.current.value);
    }
   
 
    return (
      <div className="container-fluid p-0">
          <div id='header-filter' className='container d-flex justify-content-between'>
            <div className="search-container searchboxEmployer">
                <div className="input-group">
                    <button className="btn btn-danger" type="button"><i className='bi bi-search'></i></button>
                    <input type="text" ref={txtSearch} className="form-control  " onChange={searchJobList} placeholder="Search Developers..."></input>
                </div>
            </div>
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
                      <EmployerDashCards handlesJobClickEvent={handlesShowModal} handlesMessageEvent={showMessageEvent} 
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
                  <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header className='modal-header'>
                      <Modal.Title className='modal-title'><h5>JOB SEEKER INFORMATION</h5></Modal.Title>
                      <div className='modal-tag'>
                        {/* <p>{items.category}</p> */}
                      </div>
                    </Modal.Header>
                      <Modal.Body className='modal-body'>
                        <h5>Basic Information</h5>
                        {/* <h5>{items.jobTitle} ({items.employmentStatus})</h5>
                        <p className='modal-body-company' >{items.company}</p>
                        <p className='modal-body-address'>{items.address}</p>
                        <p className='modal-body-contact'>Contact: {items.ein} / Email: {items.companyEmail}</p>
                        <p className='modal-body-salary'>Salary: {(items.salary) ? salaryValue : "Not Specified"}</p>
                        <p className='modal-body-aor'>{items.aor}</p>
                        <hr />


                          <div className='btn-click-to-apply-container'>
                              <button id='click-apply' className='btn btn-danger'>Print Resume</button>
                              <button className='btn btn-outline-danger' onClick={() => setShowModal(false)}>Close</button>
                          </div> */}
                          <div className="row pb-4">
                            <div className="col-sm-4">
                              <p>AGE</p>
                              <p><b>30 years</b></p>
                            </div>
                            <div className="col-sm-4">
                              <p>YEARS OF EXPERIENCE</p>
                              <p><b>6 Years</b></p>
                            </div>
                            <div className="col-sm-4">
                              <p>CONTACT #</p>
                              <p><b>+63982 265 9875</b></p>
                            </div>
                          </div>

                          <div className="row pb-4">
                            <div className="col-sm-4">
                              <p>AGE</p>
                              <p><b>30 years</b></p>
                            </div>
                            <div className="col-sm-4">
                              <p>LOCATION</p>
                              <p><b>address, my address, my sole address</b></p>
                            </div>
                            <div className="col-sm-4">
                              <p>EMAIL</p>
                              <p><b>example@email.com</b></p>
                            </div>
                          </div>
                          <hr />
                          <h5>Work Experience</h5>
                          <div className="row">
                            <div className="col-sm-2">image</div>
                            <div className="col-sm-10">
                              <p><b>Work Experience Number 1</b></p>
                              <p>Computer Programmer (2000 - 2005)</p>
                              <p>Company</p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-2">image</div>
                            <div className="col-sm-10">
                            <p><b>Work Experience Number 2</b></p>
                              <p>Computer Programmer (2000 - 2005)</p>
                              <p>Company</p>
                            </div>
                          </div>
                          <div className="row pb-5">
                            <div className="col-sm-2">image</div>
                            <div className="col-sm-10">
                            <p><b>Work Experience Number 3</b></p>
                              <p>Computer Programmer (2000 - 2005)</p>
                              <p>Company</p>
                            </div>
                          </div>
                          <div className='btn-click-to-apply-container'>
                              <button id='click-apply' className='btn btn-danger'>Print Resume</button>
                              <button className='btn btn-outline-danger' onClick={() => setShowModal(false)}>Close</button>
                          </div>
                      </Modal.Body>
                    <Modal.Footer className='modal-footer-display'>
                          <div>&copy; 2022 JobScript - All Rights Reserved</div>
                      </Modal.Footer>
                  </Modal> 
                )
              })
            }

            <Modal  show={showModalMessage} onHide={() => setShowModalMessage(false)} size="lg" centered >
              <Modal.Header>
                <Modal.Title><h5>Send Message</h5> </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form action="">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-4">Sender's Email</div>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder=""/>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-4">Recepient</div>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder=""/>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-4">Subject</div>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder=""/>
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center align-items-start">
                    <div className="col-sm-4">Message</div>
                    <div className="col-sm-8">
                      {/* <input type="text" className="form-control" placeholder=""/> */}
                      <textarea className="form-control" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                  </div>
                  <div>
                    <button className="btn btn-danger">Send Message</button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
      </div>
    )
}

export default EmployerDash