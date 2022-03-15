import React from 'react'
import "../css/signUp.css"
import { Link } from "react-router-dom";
import { useRef,  useState, useEffect} from 'react'
import EmployerLogIn from './EmployerLogIn';


const EmployerSignUp = () => {  
  const [returnValue, setReturnValue] = useState(false);
  const [id, setId] = useState(Date.now())
  const personNameRef = useRef(null);
  const businessNameRef = useRef(null);
  const numberRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [regEmployer, setContactList] = useState([]);

  useEffect(() => {
    localStorage.setItem('RegisterEmployerDetails',JSON.stringify(regEmployer))
  }, [regEmployer])

  if(returnValue){
    return <EmployerLogIn/>
  }
  
  let handleSubmit = (e) => {
      e.preventDefault();
      const contactObject = {
                            id:id,
                            personName: personNameRef.current.value,
                            businessName: businessNameRef.current.value,
                            number: numberRef.current.value,
                            email: emailRef.current.value,
                            password: passwordRef.current.value
      }
      setContactList([...regEmployer, contactObject]);
      personNameRef.current.value = null;
      businessNameRef.current.value = null;
      numberRef.current.value = null;
      emailRef.current.value = null;
      passwordRef.current.value = null;
      setId(Date.now());
      
      alert("Registration Sucessfull")
      setReturnValue(true)
  }
 
  return (
    <div className="containerSignUp">
        <form onSubmit={handleSubmit} className="employer" >
            <div className="signUpContainer">
                <h1>Start hiring candidates!</h1>
                <p><i class="fa fa-check" ></i>Access more than 12 million talents all over the world</p>
                <input type="text" name="username" required placeholder="Contact Person Name" ref={personNameRef}/><br/><br/>                 
                <input type="text" name="password" required placeholder="Registered Business Name" ref={businessNameRef}/><br/>  <br/> 
                <input type="number" name="number" required placeholder="Mobile Number" ref={numberRef}/><br/>  <br/> 
                <input type="text" name="email" required placeholder="Email Address" ref={emailRef}/><br/>  <br/> 
                <input type="text" name="password"  required placeholder="Password" ref={passwordRef}/><br/>
                <button className='register' type="submit">Register</button> <br/><br/>
                <p>Existing User? <Link to="/Employer" > <a>Log in HERE</a> </Link></p>              
                <p className='signUpTerms'>By continuing, you acknowledge that you accept JobScript's  <a href="#">Privacy Policies</a> and  <a href="#">Terms and Conditions. </a> </p>
            </div>
        </form> 
     </div>
  )
}

export default EmployerSignUp