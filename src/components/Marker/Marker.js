import React, { Component } from 'react';
import './Marker.css';

export default class Marker extends Component {
  render() {

    let MarkerCSSSelector = "Marker";
    if (this.props.selected) {
      MarkerCSSSelector += " selectedMarker";
    }

    return (
      <div className={MarkerCSSSelector}>
       ${ this.props.text }
      </div>
    )
  }
}