import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from 'react'
import Navbar from "./components/Navbar";
import Connect from "./pages/Connect";
import Home from './pages/Home';
import Services from "./pages/Services";
import TheDeveloper from "./pages/TheDeveloper";

const App = () => {
  return (
   <Router>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<Home />}></Route>
       <Route exact path="/Services" element={<Services />}></Route>
       <Route exact path="/TheDeveloper" element={<TheDeveloper />}></Route>
       <Route exact path="/Connect" element={<Connect />}></Route>
     </Routes>
   </Router>
  )
}

export default App
