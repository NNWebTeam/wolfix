import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Partnerzy.scss'

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
			<div className="hex1">
				<div className="hex2">
					<div className="hex3">
						{text}
					</div>
				</div>
			</div>
		</div>
		<div className="partners-hexes">
			<div className="partners-hex partner1"onClick={() => insertHexToMainHex(firstPartner)}>
				<div className="partner-hex1">
					<div className="partner-hex2">
						<div className="partner-hex3">
							{firstPartner}
						</div>
					</div>
				</div>
			</div>
			<div className="partners-hex partner2" onClick={() => insertHexToMainHex(secondPartner)}>
				<div className="partner-hex1">
					<div className="partner-hex2">
						<div className="partner-hex3">
							{secondPartner}
						</div>
					</div>
				</div>
			</div>
			<div className="partners-hex partner3" onClick={() => insertHexToMainHex(thirdPartner)}>
				<div className="partner-hex1">
					<div className="partner-hex2">
						<div className="partner-hex3">
							{thirdPartner}
						</div>
					</div>
				</div>
			</div>
			<div className="partners-hex partner4" onClick={() => insertHexToMainHex(fourthPartner)}>
				<div className="partner-hex1">
					<div className="partner-hex2">
						<div className="partner-hex3">
							{fourthPartner}
						</div>
					</div>
				</div>
			</div>
			<div className="partners-hex partner5" onClick={() => insertHexToMainHex(fifthPartner)}>
				<div className="partner-hex1">
					<div className="partner-hex2">
						<div className="partner-hex3">
							{fifthPartner}
						</div>
					</div>
				</div>
			</div>
			<div className="partners-hex partner6" onClick={() => insertHexToMainHex(sixthPartner)}>
				<div className="partner-hex1">
					<div className="partner-hex2">
						<div className="partner-hex3">
							{sixthPartner}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

export default Partnerzy
