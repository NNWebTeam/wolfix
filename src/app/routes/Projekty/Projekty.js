import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col} from 'react-bootstrap'
import Gallery from 'react-amazon-gallery'
import Coverflow from 'react-coverflow'
import './Projekty.scss'

const config = {
   bkgSize: "cover",
   containerHeight: "300",
   containerWidth: "100%",
   fullSize: false,
   injectJewelB: false,
   injectionIdentifier: null,
   mirror: true,
   main: {
      posY: "bot",
      posX: "left",
      orientation: "vertical",
      spacing: 10,
      size: 100,
      hlColor: "#ff8c00",
      hlSize: 16,
      overlay: false
   }
}


class Portfolio extends Component {
  constructor() {
    super()
    this.state = {
      active: 0
    }
  }
  render () {
    const {projects} = this.props
    return (
      <Grid className='projekty'>
        <Row>
          <Col sm={6}>
            <Gallery
              className='gallery'
              config={config}
              images={projects[this.state.active].imgs}
            />
          </Col>
          <Col sm={6}>
            <h1><b>{projects[this.state.active].name}</b></h1>
            <p>{projects[this.state.active].desc}</p>
          </Col>
        </Row>
        <Coverflow
          width={900}
          height={400}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          active={this.state.active}
        >
          <img src={projects[0].imgs[0]} onClick={() => {this.setState({active: 0})}}/>
          <img src={projects[1].imgs[0]} onClick={() => {this.setState({active: 1})}}/>
          <img src={projects[2].imgs[0]} onClick={() => {this.setState({active: 2})}}/>
          <img src={projects[3].imgs[0]} onClick={() => {this.setState({active: 3})}}/>
        </Coverflow>
      </Grid>
    )
  }
}

export default Portfolio
// Object.keys(projects).length