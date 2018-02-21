import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const AppTitle = "MatheusApp"
const AppDescription = "Creating UI with components is awesome"

const SidebarDescription = "This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “functional” because they are literally JavaScript functions."

const FooterTitle = "This is my footer description"
const FooterDescription = SidebarDescription

const SidebarListItems = ["item 1", "item 2", "item 3", "item 1", "item 2", "item 3"];

class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('mounted');
  }



  render() {
    return (
      <div className="bg-dark">
        <Header title={AppTitle} description={AppDescription} />

        <div className="container">

        <Main title="This is my main title" body={SidebarDescription} />


        <Sidebar body={SidebarDescription} />


        </div>

        <Footer title={ FooterTitle } body={ FooterDescription } />
      </div>
    );
  }
}

class Header extends Component {

  render() {

    const { title, description } = this.props;

    return (
      <header className="Header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="Header-title">{this.props.title}</h1>
          <p className="Header-description">{ this.props.description }</p>
      </header>

    );
  }
}

class Main extends Component {

  render() {

    const { title, body } =  this.props;

    return (
      <main className="MainContent">
          <h1 className="MainContent-title">{this.props.title}</h1>
          <p className="MainContent-body">
          {this.props.body}
         </p>

      </main>
    );
  }
}

class Sidebar extends Component {

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {

    const { body } =  this.props;

    return (
      <div>
      <aside className="Sidebar">
          <Clock date={new Date()} />
          <p className="Sidebar-body">
          {this.props.body}
         </p>

          <SidebarList items={SidebarListItems} />
         <Button text="Show/Hide sidebar" onClick={this.toggle} />
      </aside>

      
        

      </div>
    );
  }
}

function SidebarList(props) {
  const items = props.items;
  const itemsList = items.map((item) =>
     <ListItem key={items.toString()} value={item} />
  );
  return (
      <ul>
        {itemsList}
      </ul>
    )
}

function ListItem(props) {
  const value = props.value;  
  return <li>{value}</li>
}

class Footer extends Component {
  render() {

    const { title, body } =  this.props;

    return (
      <footer className="Footer">
          <h3 className="footer-title">{this.props.title}</h3>
          <p>{this.props.body}</p>
          <ul className="footer-links">
            <li>1</li>
            <li>2</li>
            <li>3</li>
         </ul>
      </footer>
    );
  }
}

class Button extends Component {

  render() {
    const { text } =  this.props;
    return (
      <button type="button" onClick={this.toggle} className="Button">{text}</button>
    );
  }
}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
