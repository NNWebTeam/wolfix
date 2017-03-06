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
					<h2>Druk 3D</h2>
				</div>
				<div className="technics">
					<div className="print">
						<div className="tech">
							<Link to="/projekty">
								<div className="tech-name">Wolfix Filamenty</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/projekty">
								<div className="tech-name">Projektowanie</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/projekty">
								<div className="tech-name">Opis technologii</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/projekty">
								<div className="tech-name">Opis technologii</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/projekty">
								<div className="tech-name">Drukarki 3d</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/projekty">
								<div className="tech-name">Industry</div>
								<Image src={hexr}/>
							</Link>
						</div>
						<div className="tech">
							<Link to="/projekty">
								<div className="tech-name">EDV</div>
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
