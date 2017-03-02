import React, { Component, PropTypes } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

const AddNewsModal = ({ show, handleHide }) =>
  <Modal show={show}>
    <Modal.Header>
      <Modal.Title>Dodaj news</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <textarea style={{width: '100%', height: '300px'}}/>
    </Modal.Body>

    <Modal.Footer>
      <Button onClick={handleHide} >Close</Button>
    </Modal.Footer>
  </Modal>

export default connectModal({ name: 'newsModal' })(AddNewsModal)
