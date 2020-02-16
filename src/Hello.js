import React, { Component } from "react";
import { Animate } from "react-move";
var xcoor = 250;
var ycoor = 250;
var dur = 10;

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: xcoor,
      top: ycoor
    };
  }

  toggleButtonPosition = () => {
    let left = 0;
    if (!this.state.left || this.state.left === 0) {
      left = Math.random() * 300 + 50;
    }
    let top = 0;
    if (!this.state.top || this.state.top === 0) {
      top = Math.random() * 300 + 50;
    }
    let duration = dur;
    this.setState({
      left,
      top,
      duration
    });
  };

  render() {
    let { left, top, duration } = this.state;
    return (
      <div>
        <Animate
          data={{
            left: left,
            top: top
          }}
          default={{
            left: 250,
            top: 250,
            color: "blue"
          }}
          duration={duration}
          easing="easeQuadIn"
        >
          {data => (
            <div
              style={{
                transform: `translate(${data.top}px, ${data.left}px)`, //${data.top}px
                background: "blue", //color should change
                position: "absolute",
                width: 80,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                color: "white",
                cursor: "pointer"
              }}
              onClick={this.toggleButtonPosition}
            >
              Press Me
            </div>
          )}
        </Animate>
      </div>
    );
  }
}
