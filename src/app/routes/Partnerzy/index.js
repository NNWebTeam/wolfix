import { connect } from 'react-redux'
import Partnerzy from './Partnerzy'
import {insertHexToMainHex} from '../../modules/Animation'

const mapActionCreators = {
    insertHexToMainHex
}
const mapStateToProps = ({
    animation: {
        text,
        firstPartner,
        secondPartner,
        thirdPartner,
        fourthPartner,
        fifthPartner,
        sixthPartner
    }
}) => ({
    text,
    firstPartner,
    secondPartner,
    thirdPartner,
    fourthPartner,
    fifthPartner,
    sixthPartner
})

export default connect(mapStateToProps, mapActionCreators)(Partnerzy)
