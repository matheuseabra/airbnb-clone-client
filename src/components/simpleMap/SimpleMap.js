import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Map.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 8
  };

  render() {

    const center = {
      lat: 43.6532,
      lng: 79.3832
    }
    return (
      <div className="Map">
            <GoogleMapReact
            defaultCenter={center}
            defaultZoom={11}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
          </div> 
    )
  }
}

export default SimpleMap;