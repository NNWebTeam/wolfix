import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser, logoutUser } from '../../modules/User'
import Header from './Header'

const mapActionCreators = ({
    fetchUser,
    logoutUser
})
const mapStateToProps = ({
    currentUser
}) => ({
    currentUser
})

export default connect(mapStateToProps, mapActionCreators)(Header)
