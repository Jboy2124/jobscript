import React from 'react'
import '../css/feedbackstyle.css'

const Feedback = () => {
   
  return (
    <div className='container-feedback'>
        <form className="feedbackForm" onSubmit="sendEmail(); reset(); return false;">
            <h3>GET IN TOUCH</h3>
            <input type="text" id="name" placeholder="Your Name" required/>
            <input type="email" id="email" placeholder="Your Email" required/>
            <input type="number" id="phone" placeholder="Your Phone no." required/>
            <textarea id="message" cols="45" rows="4" placeholder="How can we improve our site?"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default Feedback
