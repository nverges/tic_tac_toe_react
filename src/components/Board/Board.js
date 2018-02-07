import React, { Component } from 'react';
import update from 'immutability-helper';
import _ from 'lodash';

// Components
import Row from './Row';
import Cells from './Cells';

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
            }
        }

        // this.click = this.click.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, index) {
        let currentValues = this.state.values;
        let newValue = event.target.value;
        let newObj = update(currentValues, { $merge: { [newValue]: newValue } })

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

    // click(e, index) {
    //     e.preventDefault();
        
    //     let currentValues = this.state.values;
    //     let newValue = e.target.value;
    //     const newObj = update(currentValues, {currentValues: {$set: newValue} })
    //     this.setState({ 
    //         newObj
    //     });

    //     // logs
    //     console.log(newValue);
    //     console.log(newObj);
    //     // console.log(currentValues);
    // }

    renderCell(i) {
        return (
            <button
                id={i}
                onClick={this.handleClick}
                value={i}
                >
            {i}
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
