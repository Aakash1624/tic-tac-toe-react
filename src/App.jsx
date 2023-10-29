import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <main className="main">
          <h1 className="title">Tic Tac Toe</h1>
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
              <div className="row1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
              </div>
              <div className="row2">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
              </div>
              <div className="row3">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
              </div>
            </div>
          </div>
          <button className="btn-restart">RESTART</button>
        </main>
      </div>
    </>
  );
}

export default App;
