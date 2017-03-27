import React, { Component } from 'react'
import DocTitle from 'react-document-title'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'
import FireBaseTools from '../../utils/firebase'
import './WolfNews.scss'
import AddNewsModal from '../../components/modals/AddNewsModal'

class WolfNews extends Component {
  constructor() {
	super()
  }

  componentDidMount() {

  }
  render() {
	return (
	  <div className="wolf-news container">
		<AddNewsModal onSubmit={() => {}} />
		<h2>Wolf news</h2>
		<Row>
		  <div onClick={() => this.props.show('newsModal')} className="link pull-left">
			<Link >Dodaj news</Link>
		  </div>
		</Row>
		
		<Row>
			<Col cs={12}>
				<div className="link" style={{ margin: '0 auto' }}>
					<Link >Wczytaj więcej</Link>
				</div>
			</Col>
		</Row>
	  </div>
	)
  }
}

export default WolfNews
