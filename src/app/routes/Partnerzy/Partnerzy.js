import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Partnerzy.scss'

const Partnerzy = ({firstPartner, text, insertHexToMainHex}) =>
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
		<div className="partners-hexes" onClick={() => insertHexToMainHex(firstPartner)}>
			<div className="partners-hex">
				<div className="partner-hex1">
					<div className="partner-hex2">
						<div className="partner-hex3">
							{firstPartner}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

export default Partnerzy
