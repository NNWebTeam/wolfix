import React, {Component} from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
//import image from '../assets/background.jpg'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { turnOffAnimation } from '../modules/Animation'

const App = ({turnOffAnimation, animation, children}) =>
  <div className="app">
    {/*<img className="background" src={image} placeholder='background' />*/}
    {animation
      ? <video preload='auto' autoPlay onClick={() => turnOffAnimation()}>
          <source src="http://wolfix.pl/wp-content/uploads/2016/10/Animacja-Render-05-1.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </source>
        </video>
      : <section>
          <Header />
          {children}
          <Footer />
        </section>
    }
  </div>

const mapDispatchToProps = (dispatch) => bindActionCreators({ turnOffAnimation }, dispatch)
const mapStateToProps = (state) => ({ animation: state.animation.animation })

export default connect(mapStateToProps, mapDispatchToProps)(App)
