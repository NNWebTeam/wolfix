import { connect } from 'react-redux'
import Projekty from './Projekty'

const mapActionCreators = {
}
const mapStateToProps = ({
    projects: {projects}
}) => ({
    projects
})

export default connect(mapStateToProps, mapActionCreators)(Projekty)
