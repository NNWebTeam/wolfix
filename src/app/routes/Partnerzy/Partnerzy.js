import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Partnerzy.scss'
// import image1 from './../../assets/photos/filamentyPLA/filament (1).jpg'
// import image2 from './../../assets/photos/filamentyPLA/filament (2).jpg'
// import image3 from './../../assets/photos/filamentyPLA/filament (3).jpg'
// import image4 from './../../assets/photos/filamentyPLA/filament (4).jpg'
// import image5 from './../../assets/photos/filamentyPLA/filament (5).jpg'
// import image6 from './../../assets/photos/filamentyPLA/filament (6).jpg'
// import image7 from './../../assets/photos/filamentyPLA/filament (7).jpg'
// import image8 from './../../assets/photos/filamentyPLA/filament (8).jpg'
// import image9 from './../../assets/photos/filamentyPLA/filament (9).jpg'
// import image10 from './../../assets/photos/filamentyPLA/filament (10).jpg'
// import image11 from './../../assets/photos/filamentyPLA/filament (11).jpg'
// import image12 from './../../assets/photos/filamentyPLA/filament (12).jpg'

import image1 from './../../assets/photos/filamentyPLA/filament (1).jpg'
import image2 from './../../assets/photos/filamentyPLA/filament (2).jpg'
import image3 from './../../assets/photos/filamentyPLA/filament (3).jpg'
import image4 from './../../assets/photos/filamentyPLA/filament (4).jpg'
import image5 from './../../assets/photos/filamentyPLA/filament (5).jpg'
import image6 from './../../assets/photos/filamentyPLA/filament (6).jpg'
import image7 from './../../assets/photos/filamentyPLA/filament (7).jpg'
import image8 from './../../assets/photos/filamentyPLA/filament (8).jpg'
import image9 from './../../assets/photos/filamentyPLA/filament (9).jpg'
import image10 from './../../assets/photos/filamentyPLA/filament (10).jpg'
import image11 from './../../assets/photos/filamentyPLA/filament (11).jpg'
import image12 from './../../assets/photos/filamentyPLA/filament (12).jpg'
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
				{text}
			</div>
		</div>
		<div className="partners-hexes">
			<div className="partners-hex partner1"onClick={() => insertHexToMainHex(firstPartner)}>
				<div className="rotation">
					<Image src={image1}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner2" onClick={() => insertHexToMainHex(secondPartner)}>
				<div className="rotation">
					<Image src={image2}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner3" onClick={() => insertHexToMainHex(thirdPartner)}>
				<div className="rotation">
					<Image src={image3}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner4" onClick={() => insertHexToMainHex(fourthPartner)}>
				<div className="rotation">
					<Image src={image4}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner5" onClick={() => insertHexToMainHex(fifthPartner)}>
				<div className="rotation">
					<Image src={image5}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner6" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="rotation">
					<Image src={image6}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner7" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="rotation">
					<Image src={image7}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner8" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="rotation">
					<Image src={image8}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner9" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="rotation">
					<Image src={image9}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner10" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="rotation">
					<Image src={image10}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner11" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="rotation">
					<Image src={image11}/>
					<div className="hover" style={hexStyle}></div>
				</div>
			</div>
			<div className="partners-hex partner12" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="rotation">
					<Image src={image12}/>
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