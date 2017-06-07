import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from '../../utils/firebase';
import {Link} from 'react-router'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import { fetchUser, updateUser, logoutUser } from '../../modules/User'
import Loading from '../helpers/loading'
import ChangePassword from './change_password'
import Dropzone from 'react-dropzone'

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUser();
    this.state = {
      message: '',
      photoURL: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const email = this.refs.email.value
    const displayName = this.refs.displayName.value
    const photoURL = this.state.photoURL
    this.props.updateUser({ email, displayName, photoURL }).then((data) => {
      if (data.payload.errorCode) {
        this.setState({ message: data.payload.errorMessage })
      } else {
        this.setState({ message: 'Zmiany zostały zapisane!'})
      }
    })
  }

  render() {
    if (!this.props.currentUser) {
      return <Loading />
    }
    function handleSubmit(){
      console.log(this.state.message);
    }

    return (
      <Grid className="">
        <Row>
          
          <Col sm={6}>
          <h2>Ustawienia profilu</h2>
            <form id="frmProfile" role="form" onSubmit={this.onFormSubmit}>
              <p>{this.state.message}</p>
              <br />
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input
                type="text" defaultValue={this.props.currentUser.email}
                className="form-control" id="email" ref="email" placeholder="Email" name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="displayName">Imię: </label>
                <input
                type="text" defaultValue={this.props.currentUser.displayName}
                className="form-control" ref="displayName" id="displayName" placeholder="Imię"
                name="displayName"
                />
              </div>
              <div className="form-group">
                <label htmlFor="displayName">Zdjęcie: </label>
                <Dropzone
                  onDrop={file => {this.setState({photoURL: file[0]})}}
                  multiple={false}
                  accept='image/*'
                >
                  <Image src={this.state.photoURL.preview} responsive/>
                </Dropzone>
              </div>
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Zapisz</button>
            </form>
          </Col>
          <Col sm={6} style={{marginTop: 55}}>
            <ChangePassword />
            <Link to='/logout'><button style={{marginTop: 20}}className="btn btn-primary">Wyloguj</button></Link>
          </Col>
        </Row>
      </Grid>
    );
  }

}

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchUser, updateUser }, dispatch)
const mapStateToProps = (state) => ({ currentUser: state.user.payload })

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
