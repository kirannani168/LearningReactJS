import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            num: 0
        }
    }
    increaseNum(){
        this.setState({
            num:  this.state.num+1
        })
    }
    decreaseNum(){
        this.setState({
            num: this.state.num-1
        })
    }
  render() {
    return (
      <div>
        <h3>Learning this.setState method</h3>
        <h2>count: {this.state.num}</h2><br/>
        <button onClick={()=>this.increaseNum()}>Increase</button> &nbsp;
        <button onClick={()=>this.decreaseNum()}>Decrease</button>
      </div>
    )
  }
}
