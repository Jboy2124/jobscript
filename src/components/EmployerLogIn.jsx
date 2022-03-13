import React, { useEffect } from 'react'
import "../css/jobseeker.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const EmployerLogIn = () => {
    useEffect(() => {
        localStorage.setItem('admin', JSON.stringify({
            username:"PakopyaNiEdgar",
            password: "javascript"
        }));
    });

    
	let input = document.getElementsByTagName('input');
	let form = document.querySelector('form');

    const login = (e)=> {
        console.log(e)
        e.preventDefault()

        const existingUser = JSON.parse(localStorage.getItem('admin'));
        // console.log(existingUser)


		if ((input[0].value != "") && (input[1].value != ""))
		 {
		 	if ((input[0].value == existingUser.username ) && (input[1].value == existingUser.password))
		 	 {
		 	 	form.onSubmit = ()=>{return 1;}
				  document.cookie = "username="+input[0].value;
				  document.cookie = "password="+input[1].value;
		 	 }
		 	 else
		 	 {
		 	 	if ((input[0].value != existingUser.username) )
			 	 {
			 	 	input[0].nextElementSibling.textContent = "Username NOT match";
					setTimeout(()=>{
						input[0].nextElementSibling.textContent = "";
					}, 2000);

			 	 }
			 	 if ((input[1].value != existingUser.password) )
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
			if (input[0].value == "")
			{
				input[0].nextElementSibling.textContent = "Username is empty";
				setTimeout(()=>{
					input[0].nextElementSibling.textContent = "";
				}, 2000);
			}
			if (input[1].value == "")
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
            <Link to="/Jobseeker">
                <i className="fa fa-users"></i> <a>Job Seeker Log-In</a>
            </Link>
        </div>
        <form onSubmit={login} className="employer" >
            <div className="logInContainer">
                <div className="topic"><h1>Welcome Employer!</h1></div><br/>
                <div className="topic">Log in using your JobScript credentials</div><br/>
                <input type="text" name="username" placeholder="Enter Username"></input>
                <span></span>
            </div><br/>
            <div  className="logInContainer">
                <input type="password" name="password" placeholder="Enter Password"></input>
                <span></span>
            </div>
            <button id="log-in">Log-in</button>
            <div className="signUp"><p>New User?
                <Link to="/EmployerSignUp">
                    <a> Sign up FREE Now</a>
                </Link> </p>
            </div>
            <div className="terms"><p>This site is protected by reCAPTCHA and JobScript <a href="#">Terms of Use</a> and  <a href="#">Privacy Policy</a> apply. </p></div>
        </form> 
    </div>

  )
}

export default EmployerLogIn