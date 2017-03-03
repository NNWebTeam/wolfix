import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router'
import './WolfNews.scss'
import AddNewsModal from '../../components/modals/AddNewsModal'

const WolfNews = ({show, addNews}) =>
<div className="wolf-news container">
	<AddNewsModal handleSubmit={addNews}/>
	<h2>Wolf news</h2>
	<Row>
		<div onClick={() => show('newsModal')} className="link pull-left">
			<Link >Dodaj news</Link>
		</div>
	</Row>
	<Row>
		<Col xs={4} md={6}><img className="img-responsive pull-right" src="http://projekt.dgc.pl/wp-content/uploads/2016/09/5.-Transparentny-200x230.jpg" alt=""/></Col>
		<Col xs={8} md={6}>
		<h3>News 1</h3>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada velit sed diam ornare fermentum. Vivamus quis sollicitudin elit, posuere tincidunt justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue mattis ultricies. Donec placerat turpis sit amet dapibus dapibus. Pellentesque efficitur suscipit nibh.
		<div className="link pull-right">
			<Link >Czytaj więcej</Link>
		</div>
		</Col>
	</Row>
	<Row>
		<Col xs={8} md={6}>
		<h3>News 1</h3>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada velit sed diam ornare fermentum. Vivamus quis sollicitudin elit, posuere tincidunt justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue mattis ultricies. Donec placerat turpis sit amet dapibus dapibus. Pellentesque efficitur suscipit nibh.
		<div className="link pull-right">
			<Link to="/">Czytaj więcej</Link>
		</div>
		</Col>
		<Col xs={4} md={6}><img className="img-responsive pull-left" src="http://wolfix.pl/wp-content/uploads/2016/09/test-hex-logo-200x230.png" alt=""/></Col>
	</Row>
	<Row>
		<Col xs={4} md={6}><img className="img-responsive pull-right" src="http://projekt.dgc.pl/wp-content/uploads/2016/09/5.-Transparentny-200x230.jpg" alt=""/></Col>
		<Col xs={8} md={6}>
		<h3>News 1</h3>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada velit sed diam ornare fermentum. Vivamus quis sollicitudin elit, posuere tincidunt justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue mattis ultricies. Donec placerat turpis sit amet dapibus dapibus. Pellentesque efficitur suscipit nibh.
		<div className="link pull-right">
			<Link to="/">Czytaj więcej</Link>
		</div>
		</Col>
	</Row>
	<Row>
		<Col xs={8} md={6}>
		<h3>News 1</h3>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada velit sed diam ornare fermentum. Vivamus quis sollicitudin elit, posuere tincidunt justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue mattis ultricies. Donec placerat turpis sit amet dapibus dapibus. Pellentesque efficitur suscipit nibh.
		<div className="link pull-right">
			<Link to="/">Czytaj więcej</Link>
		</div>
		</Col>
		<Col xs={4} md={6}><img className="img-responsive pull-left" src="http://wolfix.pl/wp-content/uploads/2016/09/test-hex-logo-200x230.png" alt=""/></Col>
	</Row>
	<Row>
		<Col xs={4} md={6}><img className="img-responsive pull-right" src="http://projekt.dgc.pl/wp-content/uploads/2016/09/5.-Transparentny-200x230.jpg" alt=""/></Col>
		<Col xs={8} md={6}>
		<h3>News 1</h3>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada velit sed diam ornare fermentum. Vivamus quis sollicitudin elit, posuere tincidunt justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue mattis ultricies. Donec placerat turpis sit amet dapibus dapibus. Pellentesque efficitur suscipit nibh.
		<div className="link pull-right">
			<Link to="/">Czytaj więcej</Link>
		</div>
		</Col>
	</Row>
	<Row>
		<Col cs={12}>
			<div className="link" style={{margin: '0 auto'}}>
				<Link to="/">Wczytaj więcej</Link>
			</div>
		</Col>
	</Row>
</div>

export default WolfNews
