import React, { Component } from 'react';
import './App.css';
import Kid from './Components/Kids'
import Teacher from './Components/Teacher'
import Judge from './Components/Judge'

class App extends Component {

  constructor() {
    super()
    this.state = {
      volume: 0,
      stars: 0,
    }
  }

  static getDerivedStateFromProps() {
    return {
      volume: 5
    }
  }

  update(steps) {
    this.setState({
      steps
    })
  }

  stepsChange(as) {
    this.setState({
      applaud: true
    })
  }

  render() {
    return (
      <div className="App">
        <h1 style={{ display: this.state.unmounting }}>Student</h1>
        <div style={{ display: this.state.unmounting }}>
          <Kid dressColor="blue" furtherSteps={this.state.steps} applaud={this.state.applaud} endi={this.state.stars} />
        </div>
        <h1 style={{ display: this.state.unmounting }}>Teacher</h1>
        <div style={{ display: this.state.unmounting }}>
          <Teacher steps={this.update.bind(this)} />
        </div>
        <h1 style={{ display: this.state.unmounting }}>Judge</h1>
        <div style={{ display: this.state.unmounting }}>
          <Judge asd={this.stepsChange.bind(this)} ending={() => this.setState({ stars: this.state.stars + 1 })} />
        </div>
        {
          this.state.stars === 6 &&
          <button onClick={() => this.setState({ unmounting: "none" })} style={{ display: this.state.unmounting }}>Ask the Kid to leave the show</button>
        }
      </div>
    )
  }


}

export default App;
