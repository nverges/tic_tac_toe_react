import React, { Component } from 'react';

// Components
import Cells from './Cells';

class Row extends Component { 

    createRow() {
        const rows = [];

        for (let i = 0; i<3; i++) {
            rows.push([i]);
        }
        
        return (
            rows.map(function(name, index) {
                return (
                    <tr id={`${index + 1}`} key={`${index}`}>{index + 1}</tr>
                )
            })
        )
    }
    
    render() {
        return (
            <tr>
                {this.createRow()}   
            </tr>
        );
    }
}

export default Row;