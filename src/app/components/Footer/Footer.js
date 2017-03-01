import React from 'react'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import './Footer.scss'
import {Link} from 'react-router'

const Footer = () =>
<footer>
    <div>
        {/*<img src="http://wolfix.pl/wp-content/themes/wolfix/img/logo.png" alt=""/>*/}
        <Grid>
            <Row>
                <Col xs={2}>
                    <img src="http://wolfix.pl/wp-content/themes/wolfix/img/logo.png" alt=""/>
                </Col>
                <Col xs={3}>
                    <div>KRS 000 123 123 122</div>
                    <div>REGON 23123123123213</div>
                </Col>
                <Col xs={3}>
                    <div>Warszawa Jagielońska 32</div>
                    <div>Radom Kościuszku 13</div>
                </Col>
                <Col xs={4}>
                    <div>tel. +48 123 123 123</div> 
                    <div>e-mail office@wolfix.pl</div>
                </Col>
            </Row>
        </Grid>

    </div>
</footer>

export default Footer