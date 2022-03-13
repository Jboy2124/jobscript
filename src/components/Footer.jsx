import React from 'react'
import '../css/footer.css'
import TelLogo from '../icons/telephone.png'
import MailLogo from '../icons/mail.png'
import YT from '../icons/youtube.png'
import FB from '../icons/facebook.png'
import Twit from '../icons/twitter.png'

const Footer = () => {
  return (
    <div className='container-fluid p-0'>
        <div className="container-fluid p-0 border">
            <div id='top-footer' className="container">
                <div className="row">
                    <div id='select-country' className="col-sm-3">
                        <select name="select-country" id="" className="form-select">
                            <option value="Philippines">Philippines</option>
                            <option value="US">USA</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            <div id='tel-logo' className="col-sm-3"><img id='footer-icons' src={TelLogo} alt="" /></div>
                            <div className="col-sm-9">Toll No.: +91-40 664425654<br/>Toll Free: 1 80-011-022-060</div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                            <div id='tel-logo' className="col-sm-3"><img id='footer-icons' src={MailLogo} alt="" /></div>
                            <div className="col-sm-9">info@jobscript.com.ph<br/>""</div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div id='social-media' className="row">
                            <div id='twitter' className="col-sm-5">
                                <img id='footer-icons' src={Twit} alt="" />
                            </div>
                            <div id='fb' className="col-sm-2">
                                <img id='footer-icons' src={FB} alt="" />
                            </div>
                            <div id='yt' className="col-sm-5">
                                <img id='footer-icons' src={YT} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div  id='middle-footer' className='container-fluid'>
            <div  className="container">
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