import React from 'react'
import '../css/feedbackstyle.css'
// import Email from 'https://smtpjs.com/'

const Feedback = () => {
    // function sendEmail(){
    //     Email.send({
    //         Host: "smtp.gmail.com",
    //         Username: "jobscript2022@gmail.com",
    //         Password: "Jobscript2022",
    //         To: 'jobscript2022@gmail.com',
    //         From: document.getElementbyId("email").value,
    //         Subject: "Thank you for your Feedback",
    //         Body: "Name: " + document.getElementById("name").value
    //             + "<br/> Email: " + document.getElementById("email").value
    //             + "<br/> Phone no: " + document.getElementById("phone").value
    //             + "<br/> Message: " + document.getElementById("message").value
    //     }).then(
    //         message => alert("Message sent succesfully")
    //     );
    // }

  return (
    <div className='container-feedback'>
        <form onSubmit="sendEmail(); reset(); return false;">
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
