import React, {Component} from 'react'
import {Navbar, Nav, Image} from 'react-bootstrap'
import './Header.scss'
import { Link } from 'react-router'
import logo from './../../assets/logo.png'

class Header extends Component {
	constructor(props) {
        super(props)
        this.props.fetchUser()
        this.logOut = this.logOut.bind(this)
    }

    logOut() {
        this.props.logoutUser().then((data) => {
            this.props.fetchUser()
        })
    }

	render () {
        const {currentUser} = this.props
		return (
			<header>
				
				<Navbar>
					<Navbar.Header>
						<Navbar.Toggle />
						<Navbar.Brand>
							<Image src={logo}/>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<li>
								<Link className="link" to='/' className="link" activeClassName='is-active' onlyActiveOnIndex>Home</Link>
							</li>
							<li>
								<Link to='/wolf-news' activeClassName='is-active'>Wolf news</Link>
							</li>
							<li>
								<a href="http://prodesktop3d.com/" target="_blank">Wolf shop</a>
							</li>
							<li>
								<Link to='/o-nas' activeClassName='is-active'>O nas</Link>
							</li>
							<li>
								<Link to='/portfolio' activeClassName='is-active'>Portfolio</Link>
							</li>
							<li>
								<Link to='/druk-3d' activeClassName='is-active'>Wolf 3d</Link>
							</li>
							<li>
								<Link to='/projekty' activeClassName='is-active'>Projekty</Link>
							</li>
							<li>
								<Link to='/partnerzy' activeClassName='is-active'>Partnerzy</Link>
							</li>
							<li>
								<Link to='/kontakt' activeClassName='is-active'>Kontakt</Link>
							</li>
						</Nav>
						<Nav>
							{currentUser && currentUser.uid &&
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">
                                        {currentUser.displayName}
										<span className="caret" />
									</a>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/profile">Profil</Link></li>
                                        <li><Link to="/logout" onClick={this.logOut}>Wyloguj</Link></li>
                                    </ul>
                                </li>
                            }
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</header>
		)
	}
}

export default Header