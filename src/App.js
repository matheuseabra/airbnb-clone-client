import React, { Component } from 'react';
import SimpleMap from './components/simpleMap/SimpleMap';
import FlatItem from './components/FlatItem/FlatItem';

import './App.css';

class App extends Component {
   
  render() {
    return (
      <div className="App bg-light-gray">       
        <div className="MainGrid">
           <FlatList/>
        </div>
          <SimpleMap /> 
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


export default App;
