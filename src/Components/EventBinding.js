import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(){
        super();
        this.state = {
            message: "Hello!!"
        }
    }
    onClickHandler(){
        this.setState({
            message: "Clicked below button"
        })
    }
    render() {
        return (
            <div>
                <h3>Learning EventBinding (Event Handlers using bind)</h3>
                <p>{this.state.message}</p>
                <button onClick={() => this.onClickHandler()}>Click Me</button> <br/>
                <button onClick={this.onClickHandler.bind(this)}>Button with Bind MEthod</button>
            </div>
        )
    }
}
