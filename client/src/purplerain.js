import React, { Component } from "react";
import Sketch from "react-p5";

export default class Rain extends Component {
  x = 50;
  y = 200;
  z = 1;
  drops = 100;

  setup = (p5) => {
    p5.createCanvas(600, 300);
  };
  draw = (p5) => {
    p5.background("black");
    p5.fill("purple");
    p5.ellipse(this.y++, this.x++, 50, 5);
  };

  render() {
    return (
      <div className="sketch">
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    );
  }
}
