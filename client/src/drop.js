import React, { Component } from "react";
import Drop from "react-p5";

export default class Droplet extends Component {
  x = random;
  y = random;
  z = 100;
  drops = new Drop[100]();

  setup = (p5) => {
    p5.createCanvas(100, 200);
  };
  draw = (p5) => {
    p5.fill("red");
    p5.rect(20, 200, this.z++);

    // for (let i = 0; i<drops.length; i++ ) {
    //   drops[i]=new Drop()
    // }
  };

  render() {
    return <Drop setup={this.setup} draw={this.draw} />;
  }
}
