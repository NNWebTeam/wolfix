import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './Header.scss'

import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, logoutUser } from '../../actions/firebase_actions'

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
				<p className="logo">RIVERS</p>
				<Navbar>
					<Navbar.Header>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<li>
								<Link to='/' activeClassName='is-active' onlyActiveOnIndex>Strona Glówna</Link>
							</li>
							<li>
								<Link to='/band' activeClassName='is-active'>Zespól</Link>
							</li>
							<li>
								<Link to='/music' activeClassName='is-active'>Muzyka</Link>
							</li>
							<li>	
								<Link to='/events' activeClassName='is-active'>Terminy</Link>
							</li>
							<li>
								<Link to='/contact' activeClassName='is-active'>Kontakt</Link>
							</li>
							
						</Nav>
						<Nav pullRight>
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
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUser, logoutUser }, dispatch)
}


function mapStateToProps(state) {
    return { currentUser: state.currentUser }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header)
