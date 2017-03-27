import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col} from 'react-bootstrap'
import Gallery from 'react-amazon-gallery'
import Coverflow from 'react-coverflow'
import './Filamenty.scss'
import buttonBack from './../../assets/button.png'

const config = {
   bkgSize: "cover",
   containerHeight: "300",
   containerWidth: "100%",
   fullSize: false,
   injectJewelB: false,
   injectionIdentifier: null,
   mirror: true,
   main: {
      posY: "top",
      posX: "left",
      orientation: "vertical",
      spacing: 30,
      size: 100,
      hlColor: "#ff8c00",
      hlSize: 16,
      overlay: false
   }
}


class Filamenty extends Component {
  constructor() {
    super()
    this.state = {
      active: 0
    }
  }
  render () {
    const {filamenty} = this.props
    const {active} = this.state
    return (
      <Grid className='filamenty'>
        <Row>
          <Col sm={6}>
            <Gallery
              className='gallery'
              config={config}
              images={filamenty[active].imgs}
            />
          </Col>
          <Col sm={6}>
            <h1><b>{filamenty[active].name}</b></h1>
            <p>{filamenty[active].desc}</p>
          </Col>
        </Row>
        <Coverflow
          width={900}
          height={300}
          displayQuantityOfSide={3}
          navigation={false}
          enableHeading={false}
          active={active}
        >
          <img src={filamenty[0].imgs[0]} onClick={() => {this.setState({active: 0})}}/>
          <img src={filamenty[1].imgs[0]} onClick={() => {this.setState({active: 1})}}/>
          <img src={filamenty[2].imgs[0]} onClick={() => {this.setState({active: 2})}}/>
          <img src={filamenty[3].imgs[0]} onClick={() => {this.setState({active: 3})}}/>
          <img src={filamenty[4].imgs[0]} onClick={() => {this.setState({active: 4})}}/>
        </Coverflow>
        <div className="pomin">
          <a 
            className="link"
            style={{background: `url(${buttonBack})`}}
            onClick={() => {window.history.back()}}
          >
            Powrót
          </a>
        </div>
      </Grid>
    )
  }
}

export default Filamenty
