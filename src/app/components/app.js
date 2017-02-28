import React, {Component} from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import BackgroundImage from 'react-background-image-loader'
import image from '../assets/background.jpg'

const App = props =>
  <div className="app">
    <img className="background" src={image} placeholder='background' />
    <Header />
    {props.children}
    <Footer />
  </div>

export default App
