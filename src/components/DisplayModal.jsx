import { Popover } from 'bootstrap';
import React, { useState } from 'react'
// import { Modal, ModalBody } from 'react-bootstrap'

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

const DisplayModal = (props) => {
    const [onShow, setOnShow] = useState(true);
    
    
  return (
    <Modal show={true} dialogClassName={"primaryModal"}>
    <ModalHeader>
      <ModalTitle>Hi</ModalTitle>
    </ModalHeader>
    <ModalBody>asdfasdf</ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
   
  )
}

export default DisplayModal