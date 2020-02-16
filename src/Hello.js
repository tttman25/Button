import React, { Component } from 'react';
import { Animate } from 'react-move';
import _ from 'lodash';

export default class Hello extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      color: 'blue',
      duration: 300
    };
  }
  
  toggleButtonPosition = () => {
    let left = 0;
    if (!this.state.left || this.state.left === 0) {
      left = Math.random() * 300 + 50;
    }    
    let duration = Math.random() * 300 + 200;
    let color = _.sample(['red', 'blue', 'black', 'green']);
    this.setState({
      left,
      color,
      duration
    })
  }
  
  render() {
    let { left, color, duration } = this.state;
    return (
      <div>        
        <Animate          
          data={{
            left: left,
            color: color
          }}
          default={{
            left: 0,
            color: 'blue'
          }}
          duration={duration}
          easing='easeQuadIn' 
        >
          {data => (
            <div
              style={{
                  transform: `translate(${data.left}px, 0)`,
                  background: data.color || 'blue',
                  position: 'absolute',
                  width: 50,
                  height: 50,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  color: 'white',
                  cursor: 'pointer'
              }}
              onClick={this.toggleButtonPosition}
            >
              Hello
            </div>
          )}
        </Animate>
      </div>
    );
  }
}