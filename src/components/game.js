import React from 'react';
import {Board} from './board.js';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        grid: Array(3).fill(Array(3).fill(null)),
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    // const winner = calculateWinner(current.squares);

    
    // let status = this.returnStatus(winner);
    // const moves = this.returnMoves(history);

    return (
      <div className="game-board">
        Here goes the board
      </div>
    );


    // return (
    //   <div className="game">
    //     <div className="game-board">
    //       <Board 
    //         squares = {current.squares}
    //         onClick={(i) => this.handleClick(i)}
    //       />
    //     </div>
    //     <div className="game-info">
    //       <div>{status}</div>
    //       <ol>{moves}</ol>
    //     </div>
    //   </div>
    // );
  }

  //
  // handleClick(i) {
  //   const history = this.state.history.slice(0, this.state.stepNumber + 1);
  //   const current = history[history.length - 1];
  //   const squares = current.squares.slice();

    
  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   //stores the new state
  //   this.setState({
  //     history: history.concat([{
  //       squares: squares,
  //     }]),
  //     stepNumber: history.length,
  //     xIsNext: !this.state.xIsNext
  //   });
  // }

  // jumpTo(step) {
  //   this.setState({
  //     stepNumber: step,
  //     xIsNext: (step % 2) === 0
  //   })
  //  }

  // returnStatus(winner) {
  //   if (winner) {
  //     return `The winner is ${winner}`;
  //   } 

  //   return `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
  }

// feature for history, temporary disabled 
//   returnMoves(history) {
//     return history.map((step, move) => {
//       const previousMovement = move ? `Go to move ${move}` : 'Go to game start';
//       console.log(history)
//       console.log('move', move, step)
//       return (
//         <li key={move}>
//           <button onClick={() => this.jumpTo(move)}>
//             {previousMovement}
//           </button>
//         </li>
//       )
//     });
//   }
// }


// Needs to be changed, without hardcoding, consider draws
// function calculateWinner(squares) {
//   const winningLines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < winningLines.length; i++) {
//     const [a, b, c] = winningLines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }

export {Game};
