import React from 'react'
import '../css/footer.css'
import googleplay from '../images/googleplay.png'


const Footer = () => {
  return (
    <div className='container-fluid p-0'>
        <div className="container-fluid p-0 border" id="footerDisplay">
            <div id='top-footer' className="container">
                <div className="row">
                    <div id='select-country' className="col-sm-3">
                        <select name="select-country" id="" className="form-select">
                            <option value="Philippines">Philippines</option>
                            <option value="US">USA</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <div id='social-media' className="row">
                            <div className="col-sm-2 footerIcons">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="col-sm-9 footerIcons">
                            Toll No.: +91-40 66442565 <br/>Toll Free: 1 80-011-022-060
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                         <div id='social-media' className="row">
                            <div className="col-sm-2 footerIcons">
                                <i className="fa fa-envelope"></i>
                            </div>
                            <div className="col-sm-2 footerIcons">
                                info@jobscript.com.ph
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div id='social-media' className="row">
                            <div className="col-sm-2 footerIcons">
                                <i className="fab fa-facebook"></i>
                            </div>
                            <div className="col-sm-2 footerIcons">
                                <i className="fab fa-twitter" ></i>
                            </div>
                            <div className="col-sm-2 footerIcons">
                                <i className="fab fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div  id='middle-footer' className='container-fluid'>
            <div className="container " id='footerDisplay'>
                <div className="row">
                    <div id='footer-columns' className="col-sm-2">
                        <h5>Job Seekers</h5>
                        <p><a href="#">Job Search</a></p>
                        <p><a href="#">Job Seekers Login</a></p>
                        <p><a href="#">Upload Resume</a></p>
                        <p><a href="#">Career Advice</a></p>
                        <p><a href="#">Search Tips</a></p>
                        <p><a href="#">Free Job Alert</a></p>
                        <p><a href="#">Find Companies</a></p>
                        <p><a href="#">Help</a></p>
                    </div>
                    <div id='footer-columns' className="col-sm-2">
                        <h5>Employers</h5>
                        <p><a href="#">Employer Login</a></p>
                        <p><a href="#">Job Posting</a></p>
                        <p><a href="#">Access Resume Database</a></p>
                        <p><a href="#">Join Recruiters</a></p>
                        <p><a href="#">Research Reports</a></p>
                    </div>
                    <div id='footer-columns' className="col-sm-2">
                        <h5>JobScript</h5>
                        <p><a href="#">About Us</a></p>
                        <p><a href="#">Contact Us</a></p>
                        <p><a href="#">Career with Us</a></p>
                        <p><a href="#">Send Feedback</a></p>
                        <p><a href="#">Testimonials</a></p>
                    </div>
                    <div id='footer-columns' className="col-sm-2">
                        <h5>Stay Connected</h5>
                        <p><a href="#">Facebook</a></p>
                        <p><a href="#">Twitter</a></p>
                        <p><a href="#">LinkedIn</a></p>
                        <p><a href="#">Youtube</a></p>
                        {/* <p><a href="#">Testimonials</a></p> */}
                    </div>
                    <div id='footer-columns' className="col-sm-2">
                        <h5>Legal</h5>
                        <p><a href="#">Security and Fraud</a></p>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Terms of Use</a></p>
                        <p><a href="#">Complaints</a></p>
                    </div> 
                    <div id='footer-columns' className="col-sm-2">
                        <p><a href="#"><img className='w-100' src={googleplay}/></a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item ">
                    <h2 class="accordion-header" id="flush-headingOne"  >
                        <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Job Seekers
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#blog_topic">
                            <div className="accordion-body"> Job Search</div>
                            <div className="accordion-body"> Upload Resume</div>
                            <div className="accordion-body"> Search Tips</div>
                            <div className="accordion-body"> Free Job Alert</div>
                            <div className="accordion-body"> Find Companies</div>
                            <div className="accordion-body"> Help</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> Employers
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#blog_topic">
                                <div className="accordion-body"> Employer Login</div>
                                <div className="accordion-body"> Job Posting</div>
                                <div className="accordion-body"> Access Resume Database</div>
                                <div className="accordion-body"> Join Recruiters</div>
                                <div className="accordion-body"> Research Reports</div>
                        </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed"  type="button" data-toggle="collapse" data-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> JobScript
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#blog_topic">
                                <div className="accordion-body"> About Us</div>
                                <div className="accordion-body"> Contact Us</div>
                                <div className="accordion-body"> Career With Us</div>
                                <div className="accordion-body"> Send Feedback</div>
                                <div className="accordion-body"> Testimonials</div>
                        </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                    <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour"> Stay Connected
                    </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#blog_topic">
                                <div className="accordion-body"> Facebook</div>
                                <div className="accordion-body"> Twitter</div>
                                <div className="accordion-body"> LinkedIn</div>
                                <div className="accordion-body"> Youtube</div>
                        </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFive">
                    <button class="accordion-button collapsed" type="button" data-toggle="collapse" data-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive"> Legal
                    </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#blog_topic">
                                <div className="accordion-body"> Security and Fraud</div>
                                <div className="accordion-body"> Privacy Policy</div>
                                <div className="accordion-body"> Terms of Use</div>
                                <div className="accordion-body"> Complaints</div>
                        </div>
                </div>
              </div>

        <div id='copyright-footer' className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    &copy; 2022 JobScript - All Rights Reserved
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer