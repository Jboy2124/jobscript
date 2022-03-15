import React, { useEffect, useState } from 'react'
import "../css/jobseeker.css"
import { Link } from "react-router-dom";
import JobSeekerDash from './JobSeekerDash'



const JobSeekerLogIn = () => {
   
	const [returnValue, setReturnValue] = useState(false);
    
	let input = document.getElementsByTagName('input');
	let form = document.querySelector('form');
	
	if(returnValue){
		return <JobSeekerDash/>
	}
    
	const login = (e)=> {
        console.log(e)
        e.preventDefault()

        const existingUser = JSON.parse(localStorage.getItem('RegisterJobSeekerDetails'));

		let username = "";
		let password = "";
		for (const key in existingUser) {
			username = existingUser[key].email;
			password = existingUser[key].password;
		}

		if ((input[0].value !== "") && (input[1].value !== ""))
		 {
		 	if ((input[0].value === username ) && (input[1].value === password))
		 	 {
				  setReturnValue(true)
		 	 }
		 	 else
		 	 {
		 	 	if ((input[0].value !== existingUser.username) )
			 	 {
			 	 	input[0].nextElementSibling.textContent = "Username NOT match";
					setTimeout(()=>{
						input[0].nextElementSibling.textContent = "";
					}, 2000);

			 	 }
			 	 if ((input[1].value !== existingUser.password) )
			 	 {
			 	 	input[1].nextElementSibling.textContent = "Password NOT match";
					setTimeout(()=>{
						input[1].nextElementSibling.textContent = "";
					}, 2000);
			 	 }
		 	 }
		 }
		else
		 {
			if (input[0].value === "")
			{
				input[0].nextElementSibling.textContent = "Username is empty";
				setTimeout(()=>{
					input[0].nextElementSibling.textContent = "";
				}, 2000);
			}
			if (input[1].value === "")
			{
				input[1].nextElementSibling.textContent = "Password is empty";
				setTimeout(()=>{
					input[1].nextElementSibling.textContent = "";
				}, 2000);
			}
		 }
	}
    
  return (
    <div className="logo">
        <div id="logo">
            <Link to="/Employer">
                <i className="fa fa-users"></i><a>Employer Log-In</a>
            </Link>
        </div>
        <form onSubmit={login}>
            <div>
                <div className="topic"><h1>Welcome Job Seeker!</h1></div><br/>                
                <div className="topic">Log in using your JobScript credentials</div><br/>
                <input type="text" name="username" placeholder="Enter Username"></input>
                <span></span>
            </div><br/>
            <div>
                <input type="password" name="password" placeholder="Enter Password"></input>
                <span></span>
            </div>
            <button id="log-in" > Log-in</button>
            <div className="signUp"><p>New User?
                <Link to="/JobSeekerSignUp">
                    <a href="www.google.com" className="signUp"> Sign up FREE Now</a>
                </Link> </p></div>
            <div className="terms"><p>This site is protected by reCAPTCHA and JobScript <a href="www.google.com">Terms of Use</a> and  <a href="www.google.com">Privacy Policy</a> apply. </p></div>
        </form>

    </div>
    
  )
}

export default JobSeekerLogIn