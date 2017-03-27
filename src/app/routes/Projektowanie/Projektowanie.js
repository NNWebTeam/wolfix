import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid, Row, Col, Image} from 'react-bootstrap'
import Coverflow from 'react-coverflow'

class Projektowanie extends Component {
	constructor() {
    super()
    this.state = {
      active: 0
    }
  }
  render () {
    const {projektowanie} = this.props
    return (
      <Grid className='projekty' style={{marginTop: 30}}>
        <Row>
          <Col sm={6}>
            <Image
							src={projektowanie[this.state.active].img}
							responsive
							style={{marginLeft: 100}}
						/>
          </Col>
          <Col sm={6}>
            <h2><b>Projektowanie</b></h2>
            <p>
				Opowieść, przekaz, emocje – to DESIGN. Połączenie sztuki , założeń i użyteczności to DOBRY DESIGN.
Tworząc nasze projekty dbamy o każdy szczegół: o istotę pomysłu, spełnienie wymagań, dostosowanie
produktu do możliwości technologii czy obróbki, a przy tym o atrakcyjność wizualną. Skorzystaj z
naszego doświadczenia w projektowaniu i procesie szybkiego prototypowania, aby uczynić swój
projekt kompletnym. Skonsultujemy Twój pomysł i pomożemy w doborze najlepszej dostępnej
technologii, a także zaprojektujemy prototyp czy wyrób gotowy!

			</p>
          </Col>
        </Row>
        <Coverflow
          width={900}
          height={400}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          active={this.state.active}
        >
          <img src={projektowanie[0].img} onClick={() => {this.setState({active: 0})}}/>
        </Coverflow>
      </Grid>
    )
  }
}

export default Projektowanie
