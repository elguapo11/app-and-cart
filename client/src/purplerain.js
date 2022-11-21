import React, { Component } from "react";
import Sketch from "react-p5";

import './purplerain.css';



export default class Rain extends Component {
  x = 50 
  y = 50

  setup = (p5) => {
    p5.createCanvas(500, 500)
    
  
  }
  draw = p5 => {
    p5.background('rgba(0,255,0, 0.25)')
    p5.rect(this.x, this.y, 150, 70, 80)
    this.x++  


 
  }

  render() {
    return (
            <div className="sketch">
              <Sketch setup={this.setup} draw={this.draw} />
            </div>
          )
    
  }
}
