import { connect } from 'react-redux'
import Partnerzy from './Partnerzy'
import {insertHexToMainHex} from '../../modules/Animation'

const mapActionCreators = {
    insertHexToMainHex
}
const mapStateToProps = ({
    animation: {text, firstPartner}
}) => ({
    text,
    firstPartner
})

export default connect(mapStateToProps, mapActionCreators)(Partnerzy)
