import { connect } from 'react-redux'
import { turnOffAnimation } from '../../modules/Animation'
import App from './App'

const mapActionCreators = ({ 
    turnOffAnimation
})
const mapStateToProps = ({
    animation: {initAnimation},
    hexes: {hexes}
}) => ({ 
    initAnimation,
    hexes
})

export default connect(mapStateToProps, mapActionCreators)(App)