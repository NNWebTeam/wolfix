import { connect } from 'react-redux'
import { hideHexes, showHexes } from '../../modules/Hexes'
import Home from './Home'

const mapActionCreators = ({ 
    showHexes,
    hideHexes
})
const mapStateToProps = ({}) => ({})

export default connect(mapStateToProps, mapActionCreators)(Home)