import { connect } from 'react-redux'
import Filamenty from './Filamenty'

const mapActionCreators = {
}
const mapStateToProps = ({
    filamenty: {filamenty}
}) => ({
    filamenty
})

export default connect(mapStateToProps, mapActionCreators)(Filamenty)
