import React, { Component } from 'react';
import update from 'immutability-helper';
import _ from 'lodash';

// Components
// import Row from './Row';
// import Cells from './Cells';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values : {
                1: '',
                2: '',
                3: '',
                4: '',
                5: '',
                6: '',
                7: '',
                8: '',
                9: ''
            },
            currentPlayer: 'X'
        }

        // this.click = this.click.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidMount() {
    //     console.log('tic, tac, go!');
    // }

    // endGame() {
    //     if (this.checkIfFull() === true) {
    //         alert('WINNNNN!');
    //     }
    //     return;
    // }

    checkIfFull() {
        let full = true;

        // attempt at mapping
        // return _.map(this.state.values, (value) => {
        //     if (value === '') {
        //         // console.log(full);
        //         full = false;
        //     }
        //     console.log(full);
        //     return full;
        // })

        if (this.state.values[1] === '' ||
            this.state.values[2] === '' ||
            this.state.values[3] === '' ||
            this.state.values[4] === '' ||
            this.state.values[5] === '' ||
            this.state.values[6] === '' ||
            this.state.values[7] === '' ||
            this.state.values[8] === '' ||
            this.state.values[9] === '') {
            
            full = false;
        }

        console.log(full);
        return full;
    }

    togglePlayer() {
        if (this.state.currentPlayer === 'X') {
            return 'O';
        } else {
            return 'X';
        }
        console.log(this.state.currentPlayer);
    }

    handleClick(event) {
        this.checkIfFull();
        this.togglePlayer();
        let currentValues = this.state.values;
        let newValue = event.target.value;
        let newObj = update(currentValues, { $merge: { [newValue]: newValue } });

            this.setState({
                values: newObj
            })

        // logs 
        console.log('-------------')
        console.log('PREV STATE')
        console.log(currentValues);
        console.log('NEW STATE');
        console.log(newObj);
    }

    renderCell(i) {
        return (
            <button
                id={i}
                onClick={this.handleClick}
                value={i}
                >
            {this.state.values[i]}
            </button>
        )
    }

    render() {
        return (
            <div id='board'>
                <div className='row'>
                    {this.renderCell([1])}
                    {this.renderCell([2])}
                    {this.renderCell([3])}
                </div>
                <div className='row'>
                    {this.renderCell([4])}
                    {this.renderCell([5])}
                    {this.renderCell([6])}
                </div>
                <div className='row'>
                    {this.renderCell([7])}
                    {this.renderCell([8])}
                    {this.renderCell([9])}
                </div>
            </div>
        );
    }
}

export default Board;
