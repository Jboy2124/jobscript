import React from 'react'
import '../css/contactus.css'

const ContactUs = () => {
  return (
    <div id='contact-us-container' className='container'>
        <h1>Contact Us</h1>
        <h2 className='text-center'>Thank you for visiting JobScript</h2>
        <p className='text-center pb-5'>Whether you are a job seeker looking for tips on using JobScript, 
                    or an employer interested in our  products and services,
                    we want to hear from you! Please choose from the following 2 options</p>

        <div className="row">
            <div className="col-sm-6 border py-3">
                <h3>Job Seeker</h3>
                <p>if you are a employer and would like to contact us, call us at</p>
                <p>Toll Free: 1-80-011-1001-060</p>
                <p>*Toll: 0091-40-06118964</p>
                <p>(Standard STD/ charges apply)</p>
                <p>*Press 3 when the IVR messages comes up</p>
                <p>To reach us through mail, click the button below.</p>
                <button type='button' className='btn btn-outline-danger' >Message Us</button>
            </div>
            <div className="col-sm-6 border py-3">
            <h3>Looking for Talent</h3>
                <p>if you are a job seeker and would like to contact us, call us at</p>
                <p>Toll Free: 1-80-011-1001-060</p>
                <p>*Toll: 0091-40-06118964</p>
                <p>(Standard STD/ charges apply)</p>
                <p>*Press 1 when the IVR messages comes up</p>
                <p>To reach us through mail, click the button below.</p>
                <button type='button' className='btn btn-outline-danger' >Message Us</button>
            </div>
        </div>
    </div>
  )
}

export default ContactUs