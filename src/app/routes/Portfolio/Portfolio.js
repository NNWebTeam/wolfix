import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Coverflow from 'react-coverflow'
import './style.scss'

class Portfolio extends Component {
	constructor() {
    super()
    this.state = {
      active: 0
    }
  }
  render () {
    const {portfolio} = this.props
    return (
      <Grid className='projekty' style={{marginTop: 30}}>
        <Row>
          <Col sm={6}>
            <Image
							src={portfolio[this.state.active].img}
							responsive
							style={{marginLeft: 100}}
						/>
          </Col>
          <Col sm={6}>
            <h2><b>{portfolio[this.state.active].name}</b></h2>
            <p>{portfolio[this.state.active].desc}</p>
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
          <img src={portfolio[0].img} onClick={() => {this.setState({active: 0})}}/>
          <img src={portfolio[1].img} onClick={() => {this.setState({active: 1})}}/>
          <img src={portfolio[2].img} onClick={() => {this.setState({active: 2})}}/>
        </Coverflow>
      </Grid>
    )
  }
}

export default Portfolio
