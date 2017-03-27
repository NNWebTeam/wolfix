import React, { Component } from 'react'
import DocTitle from 'react-document-title'
import { Grid, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router'
import FireBaseTools from '../../utils/firebase'
import * as firebase from 'firebase';
import './WolfNews.scss'
import AddNewsModal from '../../components/modals/AddNewsModal'
import loader from './../../assets/loader.gif'

let postForm = {
	header: '',
	body: '',
	fileName: '',
	index: 0
}

let postFile = {
	name: ''
};

function log(e) {
	e.preventDefault();
		postForm.fileName = postFile.name;
	console.log(postForm)
	FireBaseTools.getDatabaseReference(`/news/`).push(postForm)
	
		let storageRef = firebase.storage().ref('news/'+postFile.name);
		let task = storageRef.put(postFile);
		console.log(firebase.storage().ref('news/'+postFile.name));

		task.on('state_changed',
		function progress(snapshot){
			var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
			console.log(percentage)
			// uploader.value = percentage;
		},
		function error(err){

		},
		function complete(){

		}
	)

}

function handleHeader(e) {
	postForm.header = e.target.value;
}

function handleBody(e) {
	postForm.body = e.target.value;
}

function handleImg(e) {
    e.preventDefault();
    postFile = e.target.files[0];
  }


class WolfNews extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		let rand = (Math.random() * 100) + 0;
		console.log(rand)
		firebase.database().ref('news').on('value', snap => {
			let newNews = [];
			let index = 0;
			snap.forEach((news) => {
				const tmp = news.val();
				let tmpFileName = '';
				let storageRef = firebase.storage().ref('news/'+tmp.fileName);
				storageRef.getDownloadURL().then(function(url) {
					let img = document.getElementById('newsImg'+index);
					console.log(index)
					img.src = url;
					index++;
				})
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
				<AddNewsModal handleSubmit={log} handleChangeHeader={handleHeader} handleChangeBody={handleBody} handleChangeImg={handleImg} />
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
									<Col xs={4} md={6}><img className="img-responsive pull-right" src={loader} alt={news.fileName} id={'newsImg'+index}/></Col>
									<Col xs={8} md={6}>
										<h3>{news.header}</h3>
										{news.body}
										<div className="link pull-right">
											<Link to="/projekty">Czytaj więcej{index}</Link>
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
											<Link to="/projekty">Czytaj więcej{index}</Link>
										</div>
									</Col>
									<Col xs={4} md={6}><img className="img-responsive pull-left" src={loader} alt={news.fileName} id={'newsImg'+index} /></Col>
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
