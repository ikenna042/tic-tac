import { useState } from 'react';
import './App.css';

const Square = ({value, onClickEvent}) => {
  return (
    <button
      className='square'
      onClick={onClickEvent}
      >
      {value}
    </button>
  )
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    const won = Boolean(checkWinner(squaresCopy));
    const filled = Boolean(squaresCopy[i])
    if (won || filled) {
      return;
    }
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);
  }
  const winner = checkWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`
  return (
    <div className='board'>
      <div className="status">
        {status}
      </div>
      
      <div className="board-row">
        <Square
          value={squares[0]}
          onClickEvent={() => handleClick(0)}
          />
        <Square
          value={squares[1]}
          onClickEvent={() => handleClick(1)}
          />
        <Square
          value={squares[2]}
          onClickEvent={() => handleClick(2)}
          />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onClickEvent={() => handleClick(3)}
          />
        <Square
          value={squares[4]}
          onClickEvent={() => handleClick(4)}
          />
        <Square
          value={squares[5]}
          onClickEvent={() => handleClick(5)}
          />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onClickEvent={() => handleClick(6)}
          />
        <Square
          value={squares[7]}
          onClickEvent={() => handleClick(7)}
          />
        <Square
          value={squares[8]}
          onClickEvent={() => handleClick(8)}
          />
      </div>

      <button className='reset'
        onClick={() => { setSquares(Array(9).fill(null)) }}
        > Reset
      </button>
      
    </div>
  )
}

const Game = () => {
  return (
    <div className="App">
      <div className='game'>
        <div className="game-title"> Tic-Tac-Toe </div>
        <Board />
      </div>
    </div>
  );
}

const checkWinner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // row
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // column
    [0, 4, 8], [2, 4, 6] // diagonal
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
