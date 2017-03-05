import React, {Component} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Link} from 'react-router'
import buttonBack from './../../assets/button.png'

const App = ({turnOffAnimation, initAnimation, children, hexes}) =>
  <div className="app">
    {initAnimation
      ? <div className='animation'>
          <video preload='auto' autoPlay onClick={() => turnOffAnimation()} onEnded={() => turnOffAnimation()}>
            <source src="http://wolfix.pl/wp-content/uploads/2016/10/Animacja-Render-05-1.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </source>
          </video>
          <div className="pomin">
            <Link className="link" style={buttonStyle} onClick={() => turnOffAnimation()}>Pomiń intro</Link>
          </div>
        </div>
      : hexes
        ? children
        : <section className="page">
            <Header />
            <div className="content">
                {children}
              </div>
            <Footer />
          </section>
    }
  </div>

export default App

const buttonStyle = {background: `url(${buttonBack})`}

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
