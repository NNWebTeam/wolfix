import React, { Component, PropTypes } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import { Field, reduxForm } from 'redux-form'
import Dropzone from 'react-dropzone'
import './AddNewsModal.scss'

const AddNewsModal = ({ show, handleHide, handleSubmit, pristine, submitting, submitSucceeded }) =>
  <Modal show={show} >
    <Modal.Header>
      <Modal.Title><h1>Dodaj news</h1></Modal.Title>
    </Modal.Header>
      <form>
      <Modal.Body>
        {submitSucceeded && <h3 style={{color: 'green'}}>Dodano nowego newsa</h3>}
        <div>
          <label>Nagłówek</label>
          <div>
            <Field name="header" component="input" type="text" placeholder="Nagłówek" style={{width: '100%'}}/>
          </div>
        </div>
        <div>
          <label>Tekst</label>
          <div>
            <Field name="body" component="textarea" style={{width: '100%', height: 300}}/>
          </div>
        </div>
        <div className="read-file">
          <lable>
            <Dropzone style={{width: '100%', height: 100, border: 'grey 1px solid', padding: 5}} onDrop={() => {}}>
              <div>
                Kliknij lub upuść zdjęcie
              </div>
            </Dropzone>
          </lable>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" disabled={pristine || submitting} onClick={handleSubmit}>Dodaj</Button>
        <Button onClick={handleHide} >Zamknij</Button>
      </Modal.Footer>
    </form>
  </Modal>

export default connectModal({ name: 'newsModal' })(reduxForm({ form: 'addNews' })(AddNewsModal))
