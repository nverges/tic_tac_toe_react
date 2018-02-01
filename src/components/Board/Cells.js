import React, { Component } from 'react';

class Cells extends Component {
    constructor(props) {
        super(props);
    }

    renderCells() {

        // initialize empty array of cells
        const cells = []

        // create number of desired cells
        for (let i = 0; i < 9; i++) {
            cells.push([i])
        }

        return (
            cells.map(function (name, index) {
                return (
                    <td id={`${index + 1}`} key={`${index + 1}`}>{index + 1}</td>
                )
            })
        )
    }

    render() {
        return (
            this.renderCells()
        );
    }
}

export default Cells;