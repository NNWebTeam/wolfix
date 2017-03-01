import { connect } from 'react-redux'
import { turnOffAnimation } from '../../modules/Animation'
import App from './App'

const mapActionCreators = ({ 
    turnOffAnimation
})
const mapStateToProps = ({
    animation: {animation},
    hexes: {hexes}
}) => ({ 
    animation,
    hexes
})

export default connect(mapStateToProps, mapActionCreators)(App)