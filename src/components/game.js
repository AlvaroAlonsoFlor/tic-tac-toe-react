import React from 'react';
import {Board, calculateWinner} from './board.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true
    };
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if(winner) {
      status = `The winner is ${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }


    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    const history = this.state.history;
    const current = history[history.length - 1];

    
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    //stores the new state
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext
    });
  }
}

export {Game};
