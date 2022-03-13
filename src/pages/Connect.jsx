import React from 'react'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Connect = () => {
  return (
    <div className='container-fluid p-0'>
      <div className="container">
        <ContactUs />
      </div>
      <div className="container-fluid px-0">
        <Footer />
      </div>
    </div>
  )
}

export default Connect