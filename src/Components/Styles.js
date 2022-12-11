import React, { Component } from 'react'
import '../Styles/Style.css'
class Styles extends Component {
    constructor(){
        super();
        this.state = {
            classname: ''
        }
    }
    changeToRed(){
        this.setState({
            classname: 'redColor'
        })
    }
    changeToBlue(){
        this.setState({
            classname: 'blueColor'
        })
    }
    render() {
        let className =  this.props.primary?'primary':'';
        return (
            <div>
                <h3>Learning Styles in ReactJS</h3>
                <h4 className={className}>Color</h4>
                <p className={this.state.classname}>I will change</p>
                <button onClick={this.changeToRed.bind(this)}>Click for red</button> &nbsp;
                <button onClick={this.changeToBlue.bind(this)}>Click for blue</button>
            </div>
        )
    }
}

export default Styles