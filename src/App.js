import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
//import logo from './logo.svg';
import './App.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


//const AppTitle = "AirBnB Clone";
//  const AppDescription = "A AirBnB clone made in React";


class App extends Component {
  
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };
  
  render() {

    const center = {
      lat: 43.6532,
      lng: 79.3832
    }


    return (
      <div className="App bg-light-gray">       
        <div className="MainGrid">
          <FlatList />     
        </div>
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
      </div>
    );
  }
}

class FlatList extends Component {  
  
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    }
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        })
      })
    } 

  render() {

    return (
      <div className="FlatList">
        { this.state.flats.map((flat) =>
          <FlatItem key={flat.id} flat={flat}/>
        )}
       </div>
    );
  } 
}

class FlatItem extends Component {  
  
  render() {
    const name = this.props.flat.name;
                  
    const price = this.props.flat.price + " " + this.props.flat.priceCurrency;

    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    };

    return (
      <div className="FlatItem">
          <div className="FlatPicture" style={style}></div>
          <h3 className="FlatTitle">{name}</h3>
          <p className="FlatPrice">{price}</p>       
      </div>
    );
  } 
}


export default App;
