import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './components/Marker/Marker';
import FlatItem from './components/FlatItem/FlatItem';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: ""
    }
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data
        })
      })
    }
    
    selectFlat = (flat) => {
      this.setState({      
        selectedFlat: flat
      })
    }

    handleSearch = (event) => {
      this.setState({
        search: event.target.value,
        flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
      });
    }
   
  render() {

    let center = {
      lat: 48.8566,
      lng: 2.3522
    }

    if(this.state.selectedFlat) {
      center = {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
      } 
    }

    return (
      <div className="App bg-dark">       
        <div className="MainGrid">
            <div className="Search">
              <input type="text" 
                     placeholder="Search flats by City, price..."
                     value={this.state.search}
                     onChange={this.handleSearch}
                     />
            </div>
            <div className="FlatList">
              { this.state.flats.map((flat) =>
                <FlatItem 
                  key={flat.name}
                  flat={flat}
                  selectFlat={this.selectFlat}
                />
              )}
            </div>
        </div>
        <div className="Map">
          <GoogleMapReact
          center={center}
          zoom={15}
        >
        { this.state.flats.map((flat) =>
          <Marker key={flat.name}
                  lat={flat.lat}
                  lng={flat.lng}
                  text={flat.price}
                  selected={flat === this.state.selectedFlat}/>
        )}
        </GoogleMapReact>
        </div>  
      </div>
    );
  }
}

export default App;
