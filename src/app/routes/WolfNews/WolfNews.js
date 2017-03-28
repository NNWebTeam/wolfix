import React, { Component } from 'react'
import DocTitle from 'react-document-title'
import { Grid, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import FireBaseTools from '../../utils/firebase'
import './WolfNews.scss'
import AddNewsModal from '../../components/modals/AddNewsModal'
import loader from '../../assets/loader.gif'

class WolfNews extends Component {
  componentWillMount() {
	this.props.fetchNews()
	this.props.fetchUser()
  }
  render() {
	const {addNews, fetchNews, deleteNews, news, user} = this.props

	const nids = []
	news && Object.keys(news).map((nid, i) => nids.unshift(nid))
	
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
		? nids.map((nid, i) =>
			<div>
		  <Row>
			<Col sm={4} smPush={i%2 === 1 ? 4 : 0}>	
			 <Image src={loader} />
			</Col>
			<Col sm={4} key={i} smPull={i%2 === 1 ? 4 : 0}>
			  <h2>{news[nid].header}</h2>
			  <p>{news[nid].body}</p>
			  
			</Col>
			
		  </Row>
			{user && 
				<div className="link" style={{ margin: '0 auto', marginBottom: 20}}>
				  <Link onClick={() => {deleteNews(nid); fetchNews();}}>Usuń</Link>
				</div>
			  }
				</div>
		  )
		: <Row>
			<Col sm={6}>
			  Ładowanie...
			</Col>
		  </Row>
	}
		
		<div className="link" style={{ margin: '0 auto', marginBottom: 100}}>
		  <Link onClick={() => {}}>Wczytaj więcej</Link>
		</div>
	  </div>
	)
  }
}

export default WolfNews
