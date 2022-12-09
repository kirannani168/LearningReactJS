
import React, { Component } from 'react'
import './App.css'; 
import Counter from './Components/Counter';
import CreateElement from './Components/CreateElement';
import Greet from './Components/Greet';
import Message from './Components/Message';
import Welcome from './Components/Welcome';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Greet name="Ravikiran" role="Learner">
          <p>This is child element from Ravikiran Div</p>
        </Greet>
        <Greet name="Vamshi" role="SDE-Amazon"/>
        <hr/>
        <Welcome></Welcome>
        <hr/>
        <CreateElement/>
        <hr/>
        <Message/>
        <hr/>
        <Counter/>
        <hr/>
      </div>
    )
  }
}


export default App;
