import React, { Component } from "react";
import Sketch from "react-p5";

import './purplerain.css';



export default class Rain extends Component {
  x = 50 
  y = 50

  setup = (p5) => {
    p5.createCanvas(300, 300)
    
  
  }
  draw = p5 => {
    p5.background('rgba(0,0,0, 0.25)')
    p5.ellipse(this.x, this.y, 150, 150)
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
