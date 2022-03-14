import React from 'react'
import "../css/signUp.css"
import { Link } from "react-router-dom";
import { useRef,  useState, useEffect} from 'react'
import JobSeekerDash from '../components/JobSeekerDash';


const JobSeekerSignUp = () => {  
  const [returnValue, setReturnValue] = useState(false);
  const [id, setId] = useState(Date.now())
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [regJobSeeker, setContactList] = useState([]);

  useEffect(() => {
    localStorage.setItem('RegisterJobSeekerDetails',JSON.stringify(regJobSeeker))
  }, [regJobSeeker])

  if(returnValue){
    return <JobSeekerDash/>
  }
  
  let handleSubmit = (e) => {
      e.preventDefault();
      const contactObject = {
                            id:id,
                            fname: firstNameRef.current.value,
                            lName: lastNameRef.current.value,
                            email: emailRef.current.value,
                            password: passwordRef.current.value
      }
      setContactList([...regJobSeeker, contactObject]);
      firstNameRef.current.value = null;
      lastNameRef.current.value = null;
      emailRef.current.value = null;
      passwordRef.current.value = null;
      setId(Date.now());
      
      alert("Registration Sucessfull")
      setReturnValue(true)
  }
 
  return (
    <div className="containerSignUp">
        <form onSubmit={handleSubmit}  >
            <div className="signUpContainerTwo">
                <h1>Job Seeker Sign Up</h1>
                <p><i class="fa fa-check" ></i> Sign up for FREE to easily get job matches and apply</p>
                <input  type="text" name="firsttName" required placeholder="First Name" ref={firstNameRef}/><br/><br/>                 
                <input  type="text" name="lastName" required placeholder="Last Name" ref={lastNameRef}/><br/>  <br/> 
                <input type="text" name="email" required placeholder="Email Address" ref={emailRef}/><br/>  <br/> 
                <input  type="text" name="password"  required placeholder="Password" ref={passwordRef}/><br/>
                <button className='register' type="submit">Register</button> <br/><br/>
                <p>Existing User? <Link to="/Jobseeker" > <a>Log in HERE</a> </Link></p>              
                <p className='signUpTerms'>By signing up, I have read and agreed to JobScript.com's  <a href="#">Privacy Policies</a> and  <a href="#">Terms and Conditions. </a> </p>
            </div>
        </form> 
     </div>
  )
}

export default JobSeekerSignUp