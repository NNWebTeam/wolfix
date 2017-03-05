import React, {Component} from 'react'
import DocTitle from 'react-document-title'
import {Grid} from 'react-bootstrap'
import Gallery from 'react-amazon-gallery'

const config = {
   bkgSize: "cover",
   containerHeight: "300",
   containerWidth: "100%",
   fullSize: false,
   injectJewelB: false,
   injectionIdentifier: null,
   mirror: true,
   main: {
      posY: "bot",
      posX: "left",
      orientation: "horizontal",
      spacing: 10,
      size: 69,
      hlColor: "#ff8c00",
      hlSize: 16,
      overlay: false
   },
   secondary: {
      posY: "bot",
      posX: "left",
      orientation: "horizontal",
      spacing: 8,
      size: 42,
      hlSize: 16,
      overlay: false
   }
}

const Portfolio = ({projects}) =>
  <Grid>
    <Gallery
      config={config}
      images={projects[1].imgs}
    />
  </Grid>

export default Portfolio
