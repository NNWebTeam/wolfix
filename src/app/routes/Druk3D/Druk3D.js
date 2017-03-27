import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import hexr from './../../assets/hex-red-tmp.png'
import './Druk3D.scss'
import {Link} from 'react-router'

class Druk3D extends Component {
  render() {
		return (
			<div>
				<div className="container">
					<h2>WOLF 3D</h2>
				</div>
				<div className="technics">
					<div className="print">
						<div className="tech">
							<Link to="/projektowanie">
								<div className="tech-name">Projektowanie</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/skanowanie3d">
								<div className="tech-name">Skanowanie 3d</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/drukarki3d">
								<div className="tech-name">Drukarki 3d</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/wolfsilver">
								<div className="tech-name">Wolf silver</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/industry">
								<div className="tech-name">Industry</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/design">
								<div className="tech-name">Design</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/edu">
								<div className="tech-name">EDU</div>
								<Image src={hexr}/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
  }
}

export default Druk3D
