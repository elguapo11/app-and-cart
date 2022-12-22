import React, { Component } from "react";
import Sketch from "react-p5";

import './purplerain.css';



export default class Rain extends Component {
  x = 50 
  y = 50
  z = 50

  setup = (p5) => {
    p5.createCanvas(500, 500)





    
  
  }
  draw = p5 => {
    p5.ellipse(this.x, this.y, this.z)
    p5.ellipse('50,50,80,80')
    p5.fill('rgba(94, 5, 51, 0.8)')
    this.x++
    this.y++  
    this.z++
    
    



 
  }
   
  
  

  render() {
    return (
            <div className="sketch">
              <Sketch setup={this.setup} draw={this.draw} />
            </div>
          )
    
  }
}
