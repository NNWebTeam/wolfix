import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router'
import {Polyline} from 'react-shapes'
import './Onas.scss'
import hexBlack from './../../assets/hex-black.png'
import hexRed from './../../assets/hex-red.png'
import team from './../../assets/team-icon.png'
import onas from './../../assets/wolf.png'
import pobierz from './../../assets/list-icon.png'
import kontakt from './../../assets/mail-icon.png'

class Onas extends Component {
  render() {
		return (
			<div className="onas container">
				<h2>O nas</h2>
				<div className="onas-hexes">
					<div className="onas-hexes-left">
						<Link to='/o-nas-info' className="hex1">
							<div className="info">
								<Image src={onas} style={{width:'100px'}}/>
								Value
							</div>
							<Image className="hex-img" src={hexBlack}/>
						</Link>
					</div>
					<div className="onas-hexes-center">
						<div className="hex-top">
							<Link to='/wolf-team'>
								<div className="info">
									<Image src={team}/>
									Wolf Team
								</div>
								<Image className="hex-img" src={hexBlack}/>
							</Link>
						</div>
						<div className="hex-bottom">
							<Link to='/projekty'>
								<div className="info">
									<Image src={pobierz}/>
									Pobierz
								</div>
								<Image className="hex-img" src={hexBlack}/>
							</Link>
						</div>
					</div>
					<div className="onas-hexes-right">
						<Link to='/kontakt'>
								<div className="info">
									<Image src={kontakt}/>
									Kontakt
								</div>
							<Image className="hex-img" src={hexBlack}/>
						</Link>
					</div>
				</div>
			</div>
		)
  }
}

const hex = '300 0,40 160,40 460,300 620,560 460, 560 160, 300 0'

export default Onas
