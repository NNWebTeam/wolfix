import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Coverflow from 'react-coverflow'
import hexn from './../../assets/hex-white-none.png'

class Drukarki3D extends Component {
  render() {
		return (
			<div className="container">
				<h2 style={{paddingBottom: '20px'}}>Drukarki3D</h2>
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
							Drukarki 3D to narzędzie do wizualizacji naszych marzeń, potrzeb, nowych rozwiązań.
						</b></h2>
						<p>
							Z dnia na dzień pomysłów przybywa, a ich rozmiary stają się coraz większe. Twój model nie mieści się w polu roboczym Twojej drukarki? Potrzebujesz stworzyć całą serię produktów w krótkim czasie? Drukarnia WOLFEN to nasza odpowiedź – zleć nam wydruk swojego projektu, a my urzeczywistnimy Twoje marzenia! 
							Jeżeli potrzebujesz drukarki do własnego użytku nasi specjaliści pomogą wybrać Ci odpowiedni model z dostępnych w naszej ofercie maszyn: Zmorph,  HBOT, Sinterit, DWS, Liquid Crystal. <br />Wszystkie maszyny i akcesoria do druku dostępne w <a href="http://prodesktop3d.com/" target="blank">WOLFSHOP</a>.

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

export default Drukarki3D
