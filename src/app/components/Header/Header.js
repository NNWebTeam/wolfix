import React, {Component} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './Header.scss'

import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, logoutUser } from '../../modules/User'

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
							<p className="logo">Logo</p>
						</Navbar.Brand>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							<li>
								<Link to='/' activeClassName='is-active' onlyActiveOnIndex>Strona Glówna</Link>
							</li>
							<li>
								<Link to='#' activeClassName='is-active'>Zakładka</Link>
							</li>
							<li>
								<Link to='/login' activeClassName='is-active'>Zaloguj</Link>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser, logoutUser }, dispatch)
const mapStateToProps = (state) => ({ currentUser: state.currentUser })

export default connect(mapStateToProps, mapDispatchToProps)(Header)
