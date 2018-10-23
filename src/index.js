import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Game} from './components/game.js'
import {Board} from './components/board.js'
import {Square} from './components/square.js'


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
