import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Partnerzy.scss'

import image1 from './../../assets/photos/partnerzy/3d phoenix.jpg'
import image2 from './../../assets/photos/partnerzy/AKE.jpg'
import image3 from './../../assets/photos/partnerzy/filaments4u.jpg'
import image4 from './../../assets/photos/partnerzy/mtt polska.jpg'
import image5 from './../../assets/photos/partnerzy/patech.jpg'
import image6 from './../../assets/photos/partnerzy/plast-spaw.jpg'
import image7 from './../../assets/photos/partnerzy/politechnika.jpg'
// import image8 from './../../assets/photos/filamentyPLA/filament (8).jpg'
// import image9 from './../../assets/photos/filamentyPLA/filament (9).jpg'
// import image10 from './../../assets/photos/filamentyPLA/filament (10).jpg'
// import image11 from './../../assets/photos/filamentyPLA/filament (11).jpg'
// import image12 from './../../assets/photos/filamentyPLA/filament (12).jpg'
import hexHover from './../../assets/hex.png'

const Partnerzy = ({
	firstPartner,
	secondPartner,
	thirdPartner,
	fourthPartner,
	fifthPartner,
	sixthPartner,
	text,
	insertHexToMainHex
}) =>
	<div className="partnerzy">
		<div className="main-hex">
			<div className="hex" style={hexStyle}>
				<Image src={text} responsive style={{marginTop: 20, maxHeight: '80%', display: 'inline'}}/>
			</div>
		</div>
		<div className="partners-hexes">
			<div className="partners-hex partner1" onClick={() => insertHexToMainHex(image1)}>
				<div className="rotation">
					<Image src={image1}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner2" onClick={() => insertHexToMainHex(image2)}>
				<div className="rotation">
					<Image src={image2}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner3" onClick={() => insertHexToMainHex(image3)}>
				<div className="rotation">
					<Image src={image3}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner4" onClick={() => insertHexToMainHex(image4)}>
				<div className="rotation">
					<Image src={image4}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner5" onClick={() => insertHexToMainHex(image5)}>
				<div className="rotation">
					<Image src={image5}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner6" onClick={() => insertHexToMainHex(image6)}>
				<div className="rotation">
					<Image src={image6}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner7" onClick={() => insertHexToMainHex(image7)}>
				<div className="rotation">
					<Image src={image7}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>			
		</div>
	</div>

export default Partnerzy

const hexStyle = {
	backgroundImage: `url(${hexHover})`,
	backgroundSize: '100%'
}



			{/*<div className="partners-hex partner8" onClick={() => insertHexToMainHex(image8)}>
				<div className="rotation">
					<Image src={image8}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner9" onClick={() => insertHexToMainHex(image9)}>
				<div className="rotation">
					<Image src={image9}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner10" onClick={() => insertHexToMainHex(image10)}>
				<div className="rotation">
					<Image src={image10}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>*/}