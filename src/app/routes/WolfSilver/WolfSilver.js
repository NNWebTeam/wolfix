import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Coverflow from 'react-coverflow'
import hexn from './../../assets/hex-white-none.png'

class WolfSilver extends Component {
  render() {
		return (
			<div className="container">
				<h2 style={{paddingBottom: '20px'}}>Wolf Silver</h2>
				<Grid className='projekty' style={{marginTop: 30}}>
					<Row>
					<Col sm={6}>
						<Image
							src={hexn}
							responsive
							style={{marginLeft: 100}}
						/>
					</Col>
					<Col sm={6}>
						<h2><b>
							Informacje dostępne wkrótce!
						</b></h2>
						<p>
							Zapraszamy już niedługo!
						</p>
					</Col>
					</Row>
					<Coverflow
					width={900}
					height={400}
					displayQuantityOfSide={2}
					navigation={false}
					enableHeading={false}
					active={0}
					>
					<img src={hexn} onClick={() => {}}/>
					</Coverflow>
				</Grid>	
			</div>
		)
  }
}

export default WolfSilver
