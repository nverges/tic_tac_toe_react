import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>Reac-Tac-Toe</h1>
                    <p className='lead'>Making Tic-Tac-Toe with React & Redux</p>
                </div>
            </div>
        )
    }
}

export default Jumbotron;