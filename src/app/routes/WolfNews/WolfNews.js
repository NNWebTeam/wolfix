import React, { Component } from 'react'
import DocTitle from 'react-document-title'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'
import FireBaseTools from '../../utils/firebase'
import * as firebase from 'firebase';
import './WolfNews.scss'
import AddNewsModal from '../../components/modals/AddNewsModal'

let postForm = {
	header: '',
	body: ''
}

function log(e) {
	e.preventDefault();
	FireBaseTools.getDatabaseReference(`/news/`).push(postForm)

}

function handleHeader(e) {
	postForm.header = e.target.value;
}

function handleBody(e) {
	postForm.body = e.target.value;
}


class WolfNews extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		firebase.database().ref('news').on('value', snap => {
			let newNews = [];
			snap.forEach(news => {
				const tmp = news.val();
				newNews.push(tmp);
			})
			this.newsT = newNews;
			this.props.setNews(newNews);
		})
	}
	render() {
		let niu = [];
		if (this.props.news.length != null) {
			niu = this.props.news;
		}
		return (
			<div className="wolf-news container">
				<AddNewsModal handleSubmit={log} handleChangeHeader={handleHeader} handleChangeBody={handleBody} />
				<h2>Wolf news</h2>
				<Row>
					<div onClick={() => this.props.show('newsModal')} className="link pull-left">
						<Link >Dodaj news</Link>
					</div>
				</Row>
				{
					niu.map((news, index) => {
						if (index % 2 == 0) {
							return (
								<Row>
									<Col xs={4} md={6}><img className="img-responsive pull-right" src="http://wolfix.pl/wp-content/uploads/2016/09/5.-Transparentny-200x230.jpg" alt="" /></Col>
									<Col xs={8} md={6}>
										<h3>{news.header}</h3>
										{news.body}
										<div className="link pull-right">
											<Link to="/projekty">Czytaj więcej</Link>
										</div>
									</Col>
								</Row>
							)
						} else {
							return (
								<Row>
									<Col xs={8} md={6}>
										<h3>{news.header}</h3>
										{news.body}
									<div className="link pull-right">
											<Link to="/projekty">Czytaj więcej</Link>
										</div>
									</Col>
									<Col xs={4} md={6}><img className="img-responsive pull-left" src="http://wolfix.pl/wp-content/uploads/2016/09/test-hex-logo-200x230.png" alt="" /></Col>
								</Row>
							)
						}
					})
				}
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
