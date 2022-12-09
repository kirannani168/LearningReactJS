
import React, { Component } from 'react'
import './App.css'; 
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet/>
        <Welcome></Welcome>
      </div>
    )
  }
}


export default App;
