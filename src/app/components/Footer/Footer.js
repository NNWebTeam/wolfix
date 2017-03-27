import React from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Footer.scss'
import {Link} from 'react-router'
import logo from './../../assets/logo.png'

const Footer = () =>
<footer>
    <div>
        {/*<img src="http://wolfix.pl/wp-content/themes/wolfix/img/logo.png" alt=""/>*/}
        <Grid>
            <Row>
                <Col sm={2}>
                    <Image src={logo}/>
                </Col>
                <Col sm={4}>
                    <div>NIP:  7991334957</div>
                    <div>IDEA BANK  88 1950 0001 2006 7854 1161 0001</div>
                </Col>
                <Col sm={3}>
                    <div>Gąsawy Plebańskie 14</div>
                    <div>26-502 Jastrząb</div>
                </Col>
                <Col sm={3}>
                    <div>tel. +48 791 599 653</div> 
                    <div>info@wolfix.pl</div>
                </Col>
            </Row>
        </Grid>

    </div>
</footer>

export default Footer