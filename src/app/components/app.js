import React, {Component} from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
//import image from '../assets/background.jpg'
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { turnOffAnimation } from '../modules/Animation'
import { hideHexes } from '../modules/Hexes'

const App = ({turnOffAnimation, animation, children, hideHexes, hexes}) =>
  <div className="app">
    {/*<img className="background" src={image} placeholder='background' />*/}
    {animation
      ? <video preload='auto' autoPlay onClick={() => turnOffAnimation()} onEnded={() => turnOffAnimation()}>
          <source src="http://wolfix.pl/wp-content/uploads/2016/10/Animacja-Render-05-1.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </source>
        </video>
      : hexes
        ? <div onClick={() => hideHexes()}>
            {children}
          </div>
        : <section className="page">
            <Header />
            <div className="content">
              <div className="container">
                {children}
              </div>
            </div>
            <Footer />
          </section>
    }
  </div>

const mapDispatchToProps = (dispatch) => bindActionCreators({ turnOffAnimation, hideHexes }, dispatch)
const mapStateToProps = (state) => ({ animation: state.animation.animation, hexes: state.hexes.hexes})

export default connect(mapStateToProps, mapDispatchToProps)(App)

const hex = {
  pointsCenter: '300 0,40 160,40 460,300 620,560 460, 560 160, 300 0, 300 620, 40 460, 300 300, 300 0, 560 160, 300 300',
  points: '300 0,40 160,40 460,300 620,560 460, 560 160, 300 0,300 300,40 460,300 300, 560 460',
  pointsHover: '300 0,40 160,40 460,300 620,560 460, 560 160, 300 0',
  strokeWidth: 5
}

  {/*<section className="page">
          <Header />
          <div className="content">
            <div className="container">
              {children}
            </div>
          </div>
          <Footer />
        </section>
      
    <Polyline points='150 40,0 300,150 560,450 560,600 300, 450 40, 150,40' fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={1} style={{transform: 'scale(.5)'}} ></Polyline>
        <Polyline points='150 40,0 300,150 560,450 560,600 300, 450 40, 150,40' fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={1} style={{transform: 'scale(.5)'}} ></Polyline>*/}
