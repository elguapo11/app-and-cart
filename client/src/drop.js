import React, { Component } from "react";
import Drop from "react-p5"; 


export default class Droplet extends Component {
   
        x = 50
        y = 50
      
        setup = (p5, parent) => {
          p5.createCanvas(500, 500).parent(parent)
        }
        draw = p5 => {
          p5.ellipse(this.x, this.y, 70, 70)
          this.x++
        }
      
        render() {
          return <Drop setup={this.setup} draw={this.draw} />
        }
      }

