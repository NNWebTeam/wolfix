import { connect } from 'react-redux'
import Projektowanie from './Projektowanie'

const mapActionCreators = {
}
const mapStateToProps = ({
    projektowanie: {projektowanie}
}) => ({
    projektowanie
})

export default connect(mapStateToProps, mapActionCreators)(Projektowanie)
