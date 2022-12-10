
import React, { Component } from 'react'
import './App.css'; 
import Counter from './Components/Counter';
import CreateElement from './Components/CreateElement';
import EventBinding from './Components/EventBinding';
import EventHandling from './Components/EventHandling';
import Greet from './Components/Greet';
import Message from './Components/Message';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
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
        <EventHandling/>
        <hr/>
        <EventBinding/>
        <hr/>
        <ParentComponent/>
        <hr/>
        <UserGreeting/>
        <hr/>
      </div>
    )
  }
}


export default App;
