import React from 'react'
import {Grid} from 'react-bootstrap'
import './Footer.scss'
import { Link } from 'react-router'

const Footer = () =>
    <footer>
        <Grid><Link to='/login'>Footer {new Date().getFullYear()}</Link></Grid>
    </footer>

export default Footer