import React from 'react'
import {Grid, Row, Col, FormControl, Image} from 'react-bootstrap'
import './Kontakt.scss'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"
import maps from '../../assets/maps.png'

const Kontakt = () =>
<Grid fluid className='kontakt'>
  <Row>
    <Col sm={6}>
      <form>
        <h4>Adres</h4>
        <p>WOLF PROJECT STUDIO Krzysztof Król</p>
        <p>Gąsawy Plebańskie 14</p>
        <p>26-502 Jastrząb</p>
        <h4>chcesz wiedzieć więcej?</h4>
        <FormControl
          id="name"
          type="text"
          placeholder="Jan Kowalski"
        />
        <FormControl
          id="email"
          type="text"
          placeholder="jan@kowalski.pl"
        />
        <FormControl componentClass="textarea" />
      </form>
    </Col>
    <Col sm={6}>
      <Image src={maps} responsive/>
    </Col>
  </Row>
</Grid>

export default Kontakt