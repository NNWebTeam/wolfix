import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router'

class Home extends Component {
  render() {
	return (
	  <div>
	  	<p>animacja z hexami</p>
	  	<Link to='/wolf-news' activeClassName='is-active' onlyActiveOnIndex>Wolf news</Link>
		<Link to='/druk-3d' activeClassName='is-active' onlyActiveOnIndex>Druk 3D</Link>
		<Link to='/portfolio' activeClassName='is-active' onlyActiveOnIndex>Portfolio</Link>
		<Link to='/o-nas' activeClassName='is-active' onlyActiveOnIndex>O nas</Link>
		<Link to='/projekty' activeClassName='is-active' onlyActiveOnIndex>Projekty</Link>
		<Link to='/wolfshop' activeClassName='is-active' onlyActiveOnIndex>Wolfshop</Link>
		<Link to='/partnerzy' activeClassName='is-active' onlyActiveOnIndex>Partnerzy</Link>
	  </div>
	)
  }
}

export default Home
