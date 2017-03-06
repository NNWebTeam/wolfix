import { connect } from 'react-redux'
import Portfolio from './Portfolio'

const mapActionCreators = {
    
}
const mapStateToProps = ({
    portfolio: {portfolio}
}) => ({
    portfolio
})

export default connect(mapStateToProps, mapActionCreators)(Portfolio)
