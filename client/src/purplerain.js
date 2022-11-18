import React, { Component } from "react";
import Sketch from "react-p5";

import './purplerain.css';

export default class Rain extends Component {
  x = 100
  y = 100 


  setup = (p5, parent) => {
    p5.createCanvas(200, 200).parent(parent)
    
  
  }
  draw = p5 => {
    p5.background(150, 0, 0)
    p5.circle(this.x, this.y, 150, 70)
    this.x++  

 
    
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}
