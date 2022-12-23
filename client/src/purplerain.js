import React, { Component } from "react";
import Sketch from "react-p5";


export default class Rain extends Component {

  setup = (p5) => {
    
    p5.createCanvas(500, 500)
    
  }
  draw = p5 => {
    p5.background('black')
    
  }
   


  render() {
    return (
            <div className="sketch">
              <Sketch setup={this.setup} draw={this.draw} />
            </div>
          )
    
  }
}
