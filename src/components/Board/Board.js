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
            playerX: true,
            winningConditions: [
                // Horizontal possibilities
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                // Vertical possibilities
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9],
                // Diagonal possibilities
                [1, 5, 9],
                [3, 5, 7]
            ],
        }
    }

    componentDidMount() {
        console.log('tic, tac, go!');
        // this.checkIfFull();
        // this.endGame();
    }

    endGame() {
        if (!this.checkIfFull()) {
            console.log('win!');
        }
    }

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
        console.log(`All squares are filled: ${full}`);
        return full;
    }

    squareIsEmpty(i) {
        let empty = true;

        if (this.state.values[i] == '') {
            empty = false;
        }
        return empty;
    }

    handleClick(event) {
        this.checkIfFull();

        let currentValues = this.state.values;
        let newValue = event.target.value;
        let nextPlayer = this.state.playerX ? 'X' : 'O';
        let newObj = update(currentValues, { $merge: { [newValue]: nextPlayer } });

        if (!this.squareIsEmpty(newValue)) {

            this.setState({
                values: newObj,
                playerX: !this.state.playerX
            })
        };

        if (this.didWin(newValue)) {
            console.log('yeaaaaaaaauhhhhhhh');
        }

        // logs 
        // console.log('-------------');
        // console.log('PREV STATE');
        // console.log(currentValues);
        // console.log('NEW STATE');
        // console.log(newObj);
    }

    renderCell(i) {
        return (
            <button
                id={i}
                onClick={this.handleClick.bind(this)}
                value={i}
                >
            {this.state.values[i]}
            </button>
        )
    }

    switchPlayer() {
        if (!this.state.playerX) {
            return 'O';
        } else {
            return 'X'
        }
    }

    // Confirmed Win
    didWin(currentPlayer) {

        // Initialize 'won' to false
        var won = false;

        // Loops through array of winning conditions
        for (let i = 0; i < this.state.winningConditions.length; i++) {

            // grab index of each winning condition array
            var index1 = this.state.winningConditions[i][0]; //1 // 4
            var index2 = this.state.winningConditions[i][1]; //2 // 5
            var index3 = this.state.winningConditions[i][2]; //3

            // 
            var winningSpot1 = this.state.values[index1] // x or o
            var winningSpot2 = this.state.values[index2] // x or o
            var winningSpot3 = this.state.values[index3] // x or o

            // if 3 values meet a winning condition....
            if (currentPlayer === winningSpot1 && currentPlayer === winningSpot2 && currentPlayer === winningSpot3) {

                // then WIN!
                won = true;
                console.log('WOOOOOOOOOOOOOOOOOOOOOT')
            }
        }

        // false by default
        return won;
    }

    render() {
        const nextPlayer =  this.switchPlayer(); 

        return (
            <div>
            <p className='nextPlayer'>Next Player: {nextPlayer} </p>
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
            </div> 
        );
    }
}

export default Board;
