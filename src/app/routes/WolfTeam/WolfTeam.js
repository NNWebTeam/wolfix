import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './WolfTeam.scss'
import hexTeam1 from './../../assets/WolfTeam/1c.jpg'
import hexTeamW1 from './../../assets/WolfTeam/1w.jpg'
import hexTeam2 from './../../assets/WolfTeam/2c.jpg'
import hexTeamW2 from './../../assets/WolfTeam/2w.jpg'
import hexTeam3 from './../../assets/WolfTeam/5c.jpg'
import hexTeamW3 from './../../assets/WolfTeam/5w.jpg'
import hexTeam4 from './../../assets/WolfTeam/3c.jpg'
import hexTeamW4 from './../../assets/WolfTeam/3w.jpg'
import hexTeam5 from './../../assets/WolfTeam/4c.jpg'
import hexTeamW5 from './../../assets/WolfTeam/4w.jpg'

class WolfTeam extends Component {
  render() {
		return (
			<div className="wolfteam">
				<div className="container">
					<h2>Wolf Team</h2>
					<div className="team">
						<Row>
							<Col xs={6} sm={4} md={2}>
								<div className="wolf-1" style={{background: `url(${hexTeam1})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
									<Image className="img-responsive" src={hexTeamW1}/>
									<div className="name"><h4>Mariusz Król</h4></div>
									<div className="desc">Badania i rozwój</div>
								</div>
							</Col>
							<Col xs={6} sm={4} md={2}>
							<div className="wolf-2" style={{background: `url(${hexTeam2})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
								<Image className="img-responsive" src={hexTeamW2}/>
								<div className="name"><h4>Jolanta Król</h4></div>
								<div className="desc">Filamenty</div>
							</div>
							</Col>
							<Col xs={6} sm={4} md={2}>
							<div className="wolf-3" style={{background: `url(${hexTeam3})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
								<Image className="img-responsive" src={hexTeamW3}/>
								<div className="name"><h4>Krzysztof Król</h4></div>
								<div className="desc">Technologia</div>
							</div>
							</Col>
							<Col xs={6} sm={4} md={2}>
							<div className="wolf-4" style={{background: `url(${hexTeam4})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
								<Image className="img-responsive" src={hexTeamW4}/>
								<div className="name"><h4>Żaneta Bodasińska</h4></div>
								<div className="desc">Projektant</div>
							</div>
							</Col>
							<Col xs={6} sm={4} md={2}>
							<div className="wolf-5" style={{background: `url(${hexTeam5})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
								<Image className="img-responsive" src={hexTeamW5}/>
								<div className="name"><h4>Marta Król</h4></div>
								<div className="desc">Grafika</div>
							</div>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		)
  }
}

export default WolfTeam
