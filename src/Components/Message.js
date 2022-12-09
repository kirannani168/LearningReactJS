import React, { Component } from 'react'

class Message extends Component {
    constructor(){
        super();
        this.state = {
            msg: "Welcome User, Click below to subscribe",
            btnMsg: "Subscribe"
        }
    }
    onClickHandler(){
        this.setState({
            msg: "Thanks for Subscribing",
            btnMsg: "Subscribed!!"
        })
    }
    render() {
        return (
            <div>
                <h3>Learning State</h3>
                <p>{this.state.msg}</p>
                <button onClick={()=>this.onClickHandler()}>{this.state.btnMsg}</button>
            </div>
        )
    }
}
export default Message;