import React, { useState, useRef } from 'react'
import '../css/jobseekerdash.css'
import '../css/employerDash.css'
import { Modal } from 'react-bootstrap'
import EmployerDashCards from './EmployerDashCards';
import DeveloperList from '../data-model/DeveloperList';
import Footer from './Footer';
import { Link, useNavigate } from "react-router-dom";
let arrayJobDetails = [];

const EmployerDash = () => {

  // RegisterJobSeekerDetails
  const existingUser = JSON.parse(localStorage.getItem('RegisterEmployerDetails'));
  let employerUser = "";

  for (const key in existingUser) {
    employerUser = existingUser[key].personName;
  }

  const navigateEmployerLogout = useNavigate();
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
                    <input id='text-developers-search-box' type="text" ref={txtSearch} className="form-control  " onChange={searchJobList} placeholder="Search Developers..."></input>
                </div>
            </div>
            {/* <button type='button' className='btn btn-primary' onClick={handleShow}>Launch</button> */}
            <div className="dropdown">
                              
                              <button className="btn btn-secondary dropdown-toggle buttonStyleEmployer" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fa fa-user"></i> Account
                              </button>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item">
                                   <h4>{employerUser}</h4>
                                   <p className="text-danger">Employer</p>
                                </a>
                                <a className="dropdown-item" > <i className="fa fa-user"></i> My Profile</a>
                                <a className="dropdown-item" > <i className="fa fa-folder"></i> Posted Jobs</a>
                                <a className="dropdown-item" > <i className="fa fa-cog"></i> Account Settings</a>
                                <a className="dropdown-item" href="" onClick={()=>navigateEmployerLogout("/Employer")} > <i className="fa fa-arrow-left"></i> Log Out</a>
                                {/* <Link to="/Employer" className="dropdown-item" > */}
                                  {/* <i className="fa fa-arrow-left"></i>  Log Out */}
                                {/* </Link> */}
                              </div>
            </div>
          </div>
          <div data-aos="fade-up" id='card-display-container' className="container pb-5">
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
                // salaryValue = parseFloat(items.salary).toLocaleString(undefined, {maximumFractionDigits: 2});
                return (
                  <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header className='modal-header'>
                      <Modal.Title className='modal-title'><h5>JOB SEEKER INFORMATION</h5></Modal.Title>
                    </Modal.Header>
                      <Modal.Body className='modal-body'>
                        <h5>Basic Information</h5>
                          <div className="row pb-3">
                            <div className="col-sm-4">
                              <p id='basic-info-tag'>AGE</p>
                              <p id='basic-info-value-tag'>{items.age} years old</p>
                            </div>
                            <div className="col-sm-4">
                              <p id='basic-info-tag'>YEARS OF EXPERIENCE</p>
                              <p id='basic-info-value-tag'>{items.yearExperience}</p>
                            </div>
                            <div className="col-sm-4">
                              <p id='basic-info-tag'>CONTACT #</p>
                              <p id='basic-info-value-tag'>{items.contactNo}</p>
                            </div>
                          </div>

                          <div className="row pb-2">
                            <div className="col-sm-4">
                              {/* <p>AGE</p>
                              <p><b>30--years</b></p> */}
                            </div>
                            <div className="col-sm-4">
                              <p id='basic-info-tag'>LOCATION</p>
                              <p id='basic-info-value-tag'>{items.devLocation}</p>
                            </div>
                            <div className="col-sm-4">
                              <p id='basic-info-tag'>EMAIL</p>
                              <p id='basic-info-value-tag'>{items.emailAd}</p>
                            </div>
                          </div>
                          <hr />
                          <h5>Work Experience</h5>
                          <div className="row">
                            <div className="col-sm-8">
                              {
                                arrayJobDetails.map(items => {
                                  return (
                                    <div className="row pt-2">{items.workExperience.map(i =>{
                                        return(
                                          <div id='work-exp-row' className="row pb-2">
                                            <p id='work-exp-company'>{i.comp}</p>
                                            <p id='work-exp-pos'>{i.position}</p>
                                            <p id='work-exp-tenure'>{i.tenure}</p>
                                          </div>
                                        )
                                    })}</div>
                                  )
                                })
                              }
                            </div>
                            <div className="col-sm-4">
                              <div className="row py-2">
                                  <p id='valueble-skills-list-header'>Qualifications/Skills</p>
                                  <ul id='valuable-skills-list-ul'>
                                    {
                                      items.valuableSkill.map((d) => {
                                        return (
                                          <li id='valuable-skills-list-value'>{d}</li>
                                        )
                                      })
                                    }
                                  </ul>
                              </div>
                            </div>
                          </div>               
                          <div className='btn-click-to-apply-container'>
                              <button id='click-apply' onClick={() => alert("Function is not yet define")} className='btn btn-danger'>Print Resume</button>
                              <button className='btn btn-outline-danger' onClick={() => setShowModal(false)}>Close</button>
                          </div>

                      </Modal.Body>
                    {/* <Modal.Footer className='modal-footer-display'>
                          <div>&copy; 2022 JobScript - All Rights Reserved</div>
                      </Modal.Footer> */}
                  </Modal> 
                )
              })
            }

            {/* <Modal show={showModalMessage} onHide={() => setShowModalMessage(false)} size="lg" centered >
              <Modal.Header>
                <Modal.Title><h5>Send Message</h5> </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <form id='send-message-form' action="">
                    <div className="row d-flex justify-content-center align-items-center pb-3">
                      <div className="col-sm-3">Sender</div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="example@email.com"/>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center pb-3">
                      <div className="col-sm-3">Recepient</div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder="example@email.com"/>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center pb-3">
                      <div className="col-sm-3">Subject</div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" placeholder=""/>
                      </div>
                    </div>
                    <div className="row d-flex justify-content-center align-items-start pb-3">
                      <div className="col-sm-3">Message</div>
                      <div className="col-sm-9">
                        <textarea className="form-control" name="" id="" cols="30" rows="5"></textarea>
                      </div>
                    </div>
                    <div id='btn-send-message-container'>
                      <button className="btn btn-danger">Send Message</button>
                    </div>
                  </form>
                </div>
              </Modal.Body>
            </Modal> */}
      </div>
    )
}

export default EmployerDash