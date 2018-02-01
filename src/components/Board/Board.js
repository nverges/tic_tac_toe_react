import React, { Component } from 'react';

// Components
import Row from './Row';
import Cells from './Cells';

class Board extends Component {

    render() {
        return (
            <div>
                <table id='board'>
                    <tbody>
                        <tr>
                            {/* <Row /> */}
                            <Cells />
                        </tr>
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Board;