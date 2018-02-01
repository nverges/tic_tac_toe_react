import React, { Component } from 'react';

// Components
import Row from './Row';
import Cells from './Cells';

class Board extends Component {

    render() {
        return (
            <div>
                <table id='board'>
                    <tr>
                        <td id='1'>1</td>
                        <td id='2'>2</td>
                        <td id='3'>3</td>
                    </tr>
                    <tr>
                        <td id='4'>4</td>
                        <td id='5'>5</td>
                        <td id='6'>6</td>
                    </tr>
                    <tr>
                        <td id='7'>7</td>
                        <td id='8'>8</td>
                        <td id='9'>9</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Board;

            {/* <div>
                <table id='board'>
                    <tbody>
                        <tr>
                            <Row />
                        </tr>
                    </tbody>
                </table>
            </div> */}