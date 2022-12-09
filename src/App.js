
import React, { Component } from 'react'
import './App.css'; 
import CreateElement from './Components/CreateElement';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet/>
        <Welcome></Welcome>
        <CreateElement/>
      </div>
    )
  }
}


export default App;
