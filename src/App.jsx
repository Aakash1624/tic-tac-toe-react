import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1);
  const [winner, setWinner] = useState('');
  const [char, setChar] = useState('X');
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const checkWinner = () => {
    // row check condition
    if (
      matrix[0][0] &&
      matrix[0][0] === matrix[0][1] &&
      matrix[0][1] === matrix[0][2]
    ) {
      setWinner(matrix[0][0] + ' ' + 'is the winner');
    } else if (
      matrix[1][0] &&
      matrix[1][0] === matrix[1][1] &&
      matrix[1][1] === matrix[1][2]
    ) {
      setWinner(matrix[1][0] + ' ' + 'is the winner');
    } else if (
      matrix[2][0] &&
      matrix[2][0] === matrix[2][1] &&
      matrix[2][1] === matrix[2][2]
    ) {
      setWinner(matrix[2][0] + ' ' + 'is the winner');
    }

    // column check condition
    else if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][0] &&
      matrix[1][0] === matrix[2][0]
    ) {
      setWinner(matrix[0][0] + ' ' + 'is the winner');
    } else if (
      matrix[0][1] &&
      matrix[0][1] === matrix[1][1] &&
      matrix[1][1] === matrix[2][1]
    ) {
      setWinner(matrix[2][1] + ' ' + 'is the winner');
    } else if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][2] &&
      matrix[1][2] === matrix[2][2]
    ) {
      setWinner(matrix[2][2] + ' ' + 'is the winner');
    }

    //diagonal check winner
    else if (
      matrix[0][0] &&
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2]
    ) {
      setWinner(matrix[2][2] + ' ' + 'is the winner');
    } else if (
      matrix[0][2] &&
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0]
    ) {
      setWinner(matrix[2][0] + ' ' + 'is the winner');
    } else if (count === 9) {
      setWinner('Match draw');
    }
  };

  const handleClick = (r, c) => {
    if (matrix[r][c]) return;
    const tmpMatrix = [...matrix];
    tmpMatrix[r][c] = char;
    setMatrix(tmpMatrix);
    setCount(count + 1);
    setChar(char === 'X' ? 'O' : 'X');
    checkWinner();
  };

  return (
    <>
      <div>
        <main className="main">
          <h1 className="title">Tic Tac Toe</h1>
          <div className="title-cont">
            {!winner && (
              <p className="title2">
                <span className="high">{char}</span>
                turn now
              </p>
            )}
          </div>

          {/* image-content */}
          <div className="game-content">
            <div className="img-container">
              <img
                src={'./src/images/astranouts.png'}
                alt="astranouts"
                className="pic"
              />
            </div>

            {/* board content  */}

            <div className="board">
              <div className="winner">
                <p className="title3">{winner}</p>
              </div>
              <div className="gameBoard">
                {matrix.map((row, rIndex) => (
                  <div className="row">
                    {row.map((cell, cIndex) => (
                      <div
                        className="cell"
                        onClick={() => handleClick(rIndex, cIndex)}
                      >
                        {matrix[rIndex][cIndex]}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="btn-cont">
                <button
                  className="btn-restart"
                  onClick={() => {
                    setWinner(''),
                      setChar('X'),
                      setCount(1),
                      setMatrix([
                        ['', '', ''],
                        ['', '', ''],
                        ['', '', ''],
                      ]);
                  }}
                >
                  RESTART
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
