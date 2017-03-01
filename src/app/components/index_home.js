import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import {Link} from 'react-router'
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

class Home extends Component {
  render() {
		return (
				<div className="homeHexes">
          <div className="test">
            <div className="col-left">
              <div className="hex-col">
                <div className="hex"/>
                <div className="hex">
                  <Polyline className="hexAnimation3" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                  <Polyline className="hexAnimation6" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                </div>
                <div className="hex">
                  <Polyline className="hexAnimation1" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                  <Polyline className="hexAnimation4" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                  <Polyline className="hexAnimation7" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                </div>
              </div>
            </div>
            <div className="col-center">
              <div className="hex-col">
                <div className="hex">
                  <div className="hovers">
                    <Polyline className="hexAnimation10" points={hex.pointsHover} fill={{color:'rgba(75, 75, 75, 0.3)'}} stroke={{color:'#171717'}}  strokeWidth={6}/>
                    <Polyline className="hexAnimation9" points={hex.pointsHover} fill={{color:'rgba(75, 75, 75, 0.3)'}} stroke={{color:'#171717'}}  strokeWidth={6}/>
                  </div>
                  <Polyline className="hexAnimation10" points={hex.pointsCenter} fill={{color:'#4b4b4b'}} strokeWidth={0}/>
                  <Polyline className="hexAnimation9" points={hex.pointsCenter} fill={{color:'#4b4b4b'}} strokeWidth={0}/>
                </div>
                <div className="hex" style={{marginLeft: '-91px'}}>
                  <div className="hovers">
                    <Polyline className="hexAnimation11" points={hex.pointsHover} fill={{color:'rgba(75, 75, 75, 0.3)'}} stroke={{color:'#171717'}}  strokeWidth={6}/>
                    <Polyline className="hexAnimation15" points={hex.pointsHover} fill={{color:'rgba(75, 75, 75, 0.3)'}} stroke={{color:'#171717'}}  strokeWidth={6}/>
                    <Polyline className="hexAnimation14" points={hex.pointsHover} fill={{color:'rgba(75, 75, 75, 0.3)'}} stroke={{color:'#171717'}}  strokeWidth={6}/>
                  </div>
                  <Polyline className="hexAnimation11" points={hex.pointsCenter} fill={{color:'#4b4b4b'}} strokeWidth={0}/>
                  <Polyline className="hexAnimation15" points={hex.pointsCenter} fill={{color:'#4b4b4b'}} strokeWidth={0}/>
                  <Polyline className="hexAnimation14" points={hex.pointsCenter} fill={{color:'#4b4b4b'}} strokeWidth={0}/>
                </div>
                <div className="hex">
                  <div className="hovers">
                    <Polyline className="hexAnimation12" points={hex.pointsHover} fill={{color:'rgba(75, 75, 75, 0.3)'}} stroke={{color:'#171717'}}  strokeWidth={6}/>
                    <Polyline className="hexAnimation13" points={hex.pointsHover} fill={{color:'rgba(75, 75, 75, 0.3)'}} stroke={{color:'#171717'}}  strokeWidth={6}/>
                  </div>
                  <Polyline className="hexAnimation12" points={hex.pointsCenter} fill={{color:'#4b4b4b'}} strokeWidth={0}/>
                  <Polyline className="hexAnimation13" points={hex.pointsCenter} fill={{color:'#4b4b4b'}} strokeWidth={0}/>
                </div>
              </div>
            </div>
            <div className="col-right">
              <div className="hex-col">
                <div className="hex" style={{marginLeft: '-111px'}}>
                  <Polyline className="hexAnimation8" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                  <Polyline className="hexAnimation5" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                  <Polyline className="hexAnimation2" points={hex.points} stroke={{color:'#4b4b4b'}} strokeWidth={hex.strokeWidth}/>
                </div>
                <div className="hex"/>
                <div className="hex"/>
              </div>
            </div>
          </div>
        </div>
		)
  }
}

const hex = {
  pointsCenter: '300 0,40 160,40 460,300 620,560 460, 560 160, 300 0, 300 620, 40 460, 300 300, 300 0, 560 160, 300 300',
  points: '300 0,40 160,40 460,300 620,560 460, 560 160, 300 0,300 300,40 460,300 300, 560 460',
  pointsHover: '300 0,40 160,40 460,300 620,560 460, 560 160, 300 0',
  strokeWidth: 5
}

export default Home
