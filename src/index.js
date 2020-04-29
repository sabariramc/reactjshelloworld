import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './calculator.js';
import './form.js'

function Welcome(props) {
  return (
    <h1>Hello {props.name}</h1>
  )
}

function App() {
  return (
    <div>
      <Welcome name="Sabariram" />
      <Welcome name="Gayathridevi" />
      <Welcome name="Sugavaneswari" />
    </div>
  )
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarURL}
      alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  )
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}></UserInfo>
      <div className="Comment-text"><span className="BGTest">{props.text}</span></div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Sabariram',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
}


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState(
      {
        date: new Date()
      }
    )
  }

  render() {
    return (
      <div className="Clock">
        The Time is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.setState(state => ({ isToggleOn: !state.isToggleOn }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn ? "ON" : "OFF"}</button>
    )
  }

}

function ListItem(props) {
  return (
    <li>{props.value}</li>
  )
}

class NumberList extends React.Component {

  render() {
    return (
      <ul>{this.props.numbers.map(number => <ListItem key={number.toString()} value={number} />)}</ul>
    )
  }

}

ReactDOM.render(
  <div>
    <App />
    <Comment
      date={comment.date}
      text={comment.text}
      author={comment.author}
    />
    <Clock />
    <ToggleButton />
    <NumberList numbers={[1, 2, 3]} />
    <input placeholder="First Name" ></input>
  </div>
  ,
  document.getElementById('root')
);
