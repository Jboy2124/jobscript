import React from 'react'
import '../css/hero.css'
import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className='hero-container'>
       <Container>
         <Row>
           <Col>1 of 2</Col>
           <Col>2 of 2</Col>
         </Row>
       </Container>
    </div>
    
  )
}

export default Hero