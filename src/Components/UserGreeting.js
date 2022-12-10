import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor() {
        super();
        this.state = {
            isLoggesIn: false
        }
    }
    render() {
        //If Else Approach
        if(this.state.isLoggesIn){
            return(<div><h3>Conditional Components</h3>Hello Kiran</div>)
        }
        else{
            return(<div><h3>Conditional Components</h3>Hello Guest</div>)
        }


        //Approach 2
        // let message;
        // if(this.state.isLoggesIn){
        //     message = "Hello KiranReddy"
        // }
        // else{
        //     message = "Hello Guest"
        // }

        // return(
        //     <div>{message}</div>
        // )

        //Approach 3 Terinary Operators
        // return (
        //     this.state.isLoggesIn ? <div>Hello kiran</div> : <div>Hello Guest</div>
        // )
    }
}

export default UserGreeting