
import React, { Component } from 'react'
import './App.css'; 
import Counter from './Components/Counter';
import CreateElement from './Components/CreateElement';
import EventBinding from './Components/EventBinding';
import EventHandling from './Components/EventHandling';
import Form from './Components/Form';
import Greet from './Components/Greet';
import InlineCSS from './Components/InlineCSS';
import Message from './Components/Message';
import NameList from './Components/NameList';
import ParentComponent from './Components/ParentComponent';
import Styles from './Components/Styles';
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
        <NameList/>
        <hr/>
        <Styles primary={true}/>
        <hr/>
        <InlineCSS/>
        <hr/>
        <Form/>
        <hr/>
      </div>
    )
  }
}


export default App;
