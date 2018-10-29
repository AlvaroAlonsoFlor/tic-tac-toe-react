import React, {Component} from 'react';
import Square from './square';

export default class Row extends Component {

    

    render() {

        const squares = this.props.row.map(() => {
            return(<Square />)
        })

        return(
            <div className="board-row">
                Here we render 3 squares
                {squares}
            </div>
        );
    }
}