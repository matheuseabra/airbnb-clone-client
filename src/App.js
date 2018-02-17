import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


let SidebarP = "This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions."
const AppTitle = "Welcome to MatheusApp"
const AppDescription = "This is how a my React app works"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{AppTitle}</h1>
          <p className="App-description"> {AppDescription}</p>
          <br/>  
        </header>
        <MainContent />
        <Sidebar title="This is a sidebar" body={SidebarP}/>
      </div>
    );
  }
}

class MainContent extends Component {
  render(){
    return (
      <div className="MainContent"> 
          <h1 className="MainContent-title">{this.props.title}</h1>
          <p className="MainContent-body">
          {this.props.body}
         </p>

      </div>
    );
  }
}

class Sidebar extends Component {
  render(){
    return (
      <div className="Sidebar"> 
          <h3 className="Sidebar-title">{this.props.title}</h3>
          <p className="Sidebar-body">
          {this.props.body}.
         </p>

      </div>
    );
  }
}

export default App;
