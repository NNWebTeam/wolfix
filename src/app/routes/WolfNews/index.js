import { connect } from 'react-redux'
import { show } from 'redux-modal'
import WolfNews from './WolfNews'
import { fetchNews, addNews, deleteNews } from '../../modules/News'
import { fetchUser } from '../../modules/User'

const mapActionCreators = {
    fetchNews,
    fetchUser,
    show,
    addNews,
    deleteNews
}
const mapStateToProps = ({
    news: {news},
    user: {payload}
}) => ({
    news,
    user: !!payload
})

export default connect(mapStateToProps, mapActionCreators)(WolfNews)
