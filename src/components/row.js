import React, {Component} from 'react';

export default class Row extends Component {

    

    render() {

        const squares = this.props.row.map(() => {
            return(<h4>I am a square</h4>)
        })

        return(
            <div className="board-row">
                Here we render 3 squares
                {squares}
            </div>
        );
    }
}