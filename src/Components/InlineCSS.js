import React, { Component } from 'react'

class InlineCSS extends Component {
    constructor() {
        super();
        this.state = {
            heading2: {
                color: 'DodgerBlue',
                padding: '40px',
                fontFamily: 'Arial',
                textAlign: 'center',
                border: '2px solid black',
                margin: '0 10%'
            }
        }
    }

    render() {
        const heading = {
            color: 'red',
            fontSize: '30px'
        }
        return (
            <div>
                <h3 style={heading}>This is Styling</h3>
                <h3 style={this.state.heading2}>This is Styling</h3>
            </div>
        )
    }
}
export default InlineCSS