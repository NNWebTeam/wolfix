import React, {Component} from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import {Link} from 'react-router'
import buttonBack from './../../assets/button.png'



const App = ({turnOffAnimation, initAnimation, children, hexes}) =>
  <div className="app">
    
    {initAnimation
      ? <div className='animation'>
          <video 
            preload='auto'
            autoPlay
            onClick={() => turnOffAnimation()}
            onEnded={() => turnOffAnimation()}
          >
            <source src="http://wolfix.pl/wp-content/uploads/2016/10/Animacja-Render-05-1.mp4" type="video/mp4">
            Your browser does not support the video tag.
            </source>
          </video>
          <div className="pomin">
            <Link 
              className="link"
              style={{background: `url(${buttonBack})`}}
              onClick={() => turnOffAnimation()}
            >
              Pomiń intro
            </Link>
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
