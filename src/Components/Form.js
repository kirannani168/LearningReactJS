import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            comment: '',
            option: 'React'
        }
    }
    onUsername(event) {
        this.setState({
            username: event.target.value
        })
    }
    onComment = event => {
        this.setState({
            comment: event.target.value
        })
    }
    onSelect = event => {
        this.setState({
            option: event.target.value
        })
    }
    submitted = (event) => {
        alert(`${this.state.username} commented "${this.state.comment}" and selected "${this.state.option}"`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.submitted.bind(this)}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.username} onChange={this.onUsername.bind(this)}></input>
                </div>
                <div>
                    <label>Comment</label>
                    <textarea value={this.state.comment} onChange={this.onComment.bind(this)}></textarea><br />
                </div>
                <div>
                    <label>Select Course: </label>
                    <select value={this.state.option} onChange={this.onSelect.bind(this)}>
                        <option>React</option>
                        <option>Vue</option>
                        <option>Angular</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form