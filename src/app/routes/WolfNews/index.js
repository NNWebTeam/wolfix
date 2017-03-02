import { connect } from 'react-redux'
import { show } from 'redux-modal'
import WolfNews from './WolfNews'

const mapActionCreators = {
    show
}
const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps, mapActionCreators)(WolfNews)
