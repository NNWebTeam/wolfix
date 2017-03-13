import { connect } from 'react-redux'
import { show } from 'redux-modal'
import WolfNews from './WolfNews'
import { addNews, setNews } from '../../modules/News'

const mapActionCreators = {
    show,
    addNews,
    setNews
}
const mapStateToProps = (state) => {
    const {news}  = state;
    return{
        news
    }
}

export default connect(mapStateToProps, mapActionCreators)(WolfNews)
