import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import { logoutUser } from '../../modules/User'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class logout extends Component {
  componentWillMount() {
    this.props.logoutUser()
  }
  render() {
    return (
      <Grid>
        <h2>Jesteś wylogowany!</h2>
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logoutUser
    }, dispatch);
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(logout);
