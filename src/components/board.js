
import React, {Component} from 'react';
import Row from './row.js';

class Board extends Component {

  // renderSquare(i) {
  //   return (
  //     <Square
  //       value={this.props.squares[i]}
  //       onClick={() => this.props.onClick(i)}
  //     />
  //     );
  // }

  render() {

    const rows = this.props.gameState.grid.map((row, step) => {
      return(<Row key={step} row={row}/>);
    })

    return(
      <div className = "game-board">
        Here goes the board
        {rows}
      </div>
      
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <div className="board-row">
  //         {this.renderSquare(0)}
  //         {this.renderSquare(1)}
  //         {this.renderSquare(2)}
  //       </div>
  //       <div className="board-row">
  //         {this.renderSquare(3)}
  //         {this.renderSquare(4)}
  //         {this.renderSquare(5)}
  //       </div>
  //       <div className="board-row">
  //         {this.renderSquare(6)}
  //         {this.renderSquare(7)}
  //         {this.renderSquare(8)}
  //       </div>
  //     </div>
  //   );
  // }
}

export {Board};
