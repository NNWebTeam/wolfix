import React, { Component, PropTypes } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import { Field, reduxForm } from 'redux-form'

let AddNewsModal = ({ show, handleHide, handleSubmit, handleChangeHeader, handleChangeBody, pristine, reset, submitting }) =>
  <Modal show={show} >
    <Modal.Header>
      <Modal.Title><h1>Dodaj news</h1></Modal.Title>
    </Modal.Header>
      <form onSubmit={handleSubmit}>
      <Modal.Body>
        <div>
          <label>Nagłówek</label>
          <div>
            <Field name="header" component="input" type="text" placeholder="Nagłówek" style={{width: '100%'}} onChange={handleChangeHeader}/>
          </div>
        </div>
        <div>
          <label>Tekst</label>
          <div>
            <Field name="body" component="textarea" style={{width: '100%', height: 300}} onChange={handleChangeBody}/>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" disabled={pristine || submitting}>Dodaj</Button>
        <Button onClick={handleHide} >Close</Button>
      </Modal.Footer>
    </form>
  </Modal>

AddNewsModal = connectModal({ name: 'newsModal' })(AddNewsModal)
AddNewsModal = reduxForm({ form: 'addNews' })(AddNewsModal)

export default AddNewsModal
