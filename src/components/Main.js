// Include the Main React Dependencies
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components
import Jumbotron from './Jumbotron';
import Board from './Board/Board';

class Main extends Component {

    render() {
        return (
            <div>
                <Jumbotron />
                <Board />
            </div>
        )
    }

}

export default Main;
