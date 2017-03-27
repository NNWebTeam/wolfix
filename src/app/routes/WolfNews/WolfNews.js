import React, { Component } from 'react'
import DocTitle from 'react-document-title'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import FireBaseTools from '../../utils/firebase'
import './WolfNews.scss'
import AddNewsModal from '../../components/modals/AddNewsModal'

class WolfNews extends Component {
  componentWillMount() {
	this.props.fetchNews()
	this.props.fetchUser()
  }
  render() {
	const {addNews, fetchNews, deleteNews, news, user} = this.props
	return (
	  <div className="wolf-news container">
	  	{user &&
		<div>
		  <AddNewsModal onSubmit={addNews} onSubmitSuccess={fetchNews} />
		  <h2>Wolf news</h2>
		  <Row>
			<div onClick={() => this.props.show('newsModal')} className="link pull-left">
			  <Link>Dodaj news</Link>
		   </div>
		  </Row>
		</div>
		}
		
		{news
		? Object.keys(news).map((nid, i) =>
		  <Row>
			<Col sm={6} key={i}>
			  
			  <h2>{news[nid].header}</h2>
			  <p>{news[nid].body}</p>
			  {user && 
				<div className="link" style={{ margin: '0 auto' }}>
				  <Link onClick={() => {deleteNews(nid); fetchNews();}}>Usuń</Link>
				</div>
			  }
			</Col>
		  </Row>
		  )
		: <Row>
			<Col sm={6}>
			  Ładowanie...
			</Col>
		  </Row>
	}
		
		<div className="link" style={{ margin: '0 auto' }}>
		  <Link onClick={() => {}}>Wczytaj więcej</Link>
		</div>
	  </div>
	)
  }
}

export default WolfNews
