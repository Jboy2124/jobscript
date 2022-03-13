import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from 'react'
import Navbar from "./components/Navbar";
import Connect from "./pages/Connect";
import Home from './pages/Home';
import Services from "./pages/Services";
import TheDeveloper from "./pages/TheDeveloper";
import JobSeekerLogIn from "./components/JobSeekerLogIn";
import JobSeekerSignUp from "./components/JobSeekerSignUp";
import EmployerLogIn from "./components/EmployerLogIn"
import EmployerSignUp from "./components/EmployerSignUp";
import JobSeekerDash from "./components/JobSeekerDash";


const App = () => {
   
  return (
   <Router>
     <Navbar />
     <Routes>
       <Route exact path="/*" element={<Home />}></Route>
       <Route exact path="/Services" element={<Services />}></Route>
       <Route exact path="/TheDeveloper" element={<TheDeveloper />}></Route>
       <Route exact path="/Connect" element={<Connect />}></Route>
        <Route exact path="/Employer" element={<EmployerLogIn />}></Route>
        <Route exact path="/Jobseeker" element={<JobSeekerLogIn />}> </Route>
        <Route exact path="/EmployerSignUp" element={<EmployerSignUp />}></Route>
        <Route exact path="/JobseekerSignUp" element={<JobSeekerSignUp />}> </Route>
        <Route exact path="/JobSeekerDash" > </Route>
     </Routes>
   </Router>
  )
}

export default App
