import { connect } from 'react-redux'
import { show } from 'redux-modal'
import WolfNews from './WolfNews'
import { addNews } from '../../modules/News'

const mapActionCreators = {
    show,
    addNews
}
const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps, mapActionCreators)(WolfNews)
