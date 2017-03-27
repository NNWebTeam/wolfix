import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Coverflow from 'react-coverflow'
import hexn from './../../assets/hex-white-none.png'

class Edu extends Component {
  render() {
		return (
			<div className="container">
				<h2 style={{paddingBottom: '20px'}}>Edu</h2>
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
							<a href="https://akademia3d.com.pl/" target="blank">Akademia 3D – projektowanie < br /> i druk 3D”</a> to innowacyjne, jedne z pierwszych tego typu w Polsce studia, poświęcone dynamicznie rozwijającej się technologii, jaką jest druk 3D.

						</b></h2>
						<p>
							Studia są prowadzone przez najlepszych wykładowców Wydziału Mechanicznego Energetyki i Lotnictwa Politechniki Warszawskiej oraz praktyków projektowania i wytwarzania 3D i zapewniają zarówno silne podstawy teoretyczne, jak i wiedzę praktyczną, którą gwarantuje współpraca z renomowanym Wolf Project Studio, jednym z biznesowych pionierów druku 3D w Polsce.
							<br />
							<br />
							Studia zakończą się projektem, w którym każdy absolwent zaplanuje oraz zrealizuje kompletny proces produkcyjny z wykorzystaniem druku 3D – od idei, poprzez model wirtualny, analizy numeryczne, wytworzenie z użyciem specjalistycznych drukarek 3D, aż po obróbkę i prezentację produktu.
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

export default Edu
