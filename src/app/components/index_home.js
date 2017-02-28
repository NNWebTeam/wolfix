import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'

class Home extends Component {
  constructor() {
	  super()
	  this.state = {
		  animation: true
	  }
  }
  render() {
	const {animation} = this.state
	return (
	  animation ?
      <div onClick={() => {this.setState({animation: false})}}>
		Animacja
	  </div>
	  :
	  <div>
	  	Costam
	  </div>
	)
  }
}

export default Home
