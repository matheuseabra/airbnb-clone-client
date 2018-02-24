import React, { Component } from 'react';

class Marker extends Component {
  render() {
    return (
      <div className="marker">
        { this.props.children }
      </div>
    )
  }
}

export default Marker;