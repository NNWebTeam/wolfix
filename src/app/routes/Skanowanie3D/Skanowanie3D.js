import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Coverflow from 'react-coverflow'
import hexn from './../../assets/hex-white-none.png'

class Skanowanie3D extends Component {
  render() {
		return (
			<div className="container">
				<h2 style={{paddingBottom: '20px'}}>Skanowanie3D</h2>
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
						<h2><b>Profesjonalne, mobilne urządzenie do pozyskiwania modeli 3D za pomocą 64 aparatów fotograficznych, które w jednej chwili wykonują zdjęcia z każdej strony  obiektu.</b></h2>
						<p>W ciągu zaledwie sekundy możemy otrzymać skan 3D rzeczywistego przedmiotu, człowieka czy zwierzęcia! Projekt może posłużyć do zmaterializowania go na drukarce 3D lub do tworzenia wirtualnych modeli trójwymiarowych na potrzeby filmów, gier komputerowych czy wizualizacji 360 stopni</p>
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

export default Skanowanie3D
