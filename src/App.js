import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const AppTitle = "Welcome to ReactTask";
const AppDescription = "Creating tasks in React";

const SidebarDescription = "This feature lets you add tasks to the To Do List";
const FooterTitle = "This is my footer description";
const FooterDescription = SidebarDescription;


const tasksSample = ['Task 1', 'Task 2', 'Task 3', 'Task 1', 'Task 2', 'Task 3'];

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
      <div className="bg-gray">
        <Header title={AppTitle} description={AppDescription} />
        <div className="MainGrid">
          <Main/>
          <Sidebar body={SidebarDescription} />


        </div>
        <Footer title={AppTitle} body={FooterDescription}/>
      </div>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <header className="Header bg-dark">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="Header-title">{this.props.title}</h1>
        <p className="Header-description">{ this.props.description }</p>
      </header>
    );
  }
}

class Main extends Component {

  render() {
    return (
      <main className="MainContent">
        <TasksList tasks={tasksSample} />
      </main>
    );
  }
}

function TasksList(props) {

    const tasks = props.tasks;

    return (
      <div>
      <ul className="TaskGrid">
        { tasks.map((task) =>
          <TaskItem key={task.id} title={task} description={task} />
        )}
      </ul>
    </div>
    );

}

function TaskItem(props) {
  const title = props.title;
  return <div className="Card"><li className="TaskItem"><h2>{title}</h2></li></div>;
}

class AddTaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //this.setState({this.tasks.title})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="i.e Go to the gy, do groceries" className="NameForm" value={this.state.value} onChange={this.handleChange} />
        <input className="Button" type="submit" value="Add" />
      </form>
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
    const {body} = this.props;
    return (
      <div>
        <aside className="Sidebar">
          <h1>Add a Task</h1>
          <p className="Sidebar-body">
            {this.props.body}
          </p>
          <AddTaskForm className="NameForm"/>
        </aside>
      </div>
    );
  }
}

class Footer extends Component {
  render() {

    return (
      <footer className="Footer bg-dark">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="footer-title">{this.props.title}</h3>
        <p>{this.props.body}</p>
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
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
