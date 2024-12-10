import { useState } from "react";
import "./Styles.css";

const Tictacteo = () => {
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [1, 4, 7],
    [0, 3, 6],
    [2, 5, 8],
  ];
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(true);
  const [win, setWin] = useState(null);
  const rendersquare = (index) => {
    return (
      <button
        onClick={() => handleClick(index)}
        disabled={square[index] || win}
      >
        {square[index]}
      </button>
    );
  };

  const handleClick = (index) => {
    if (square[index] || win) {
      return;
    }
    // console.log(index, "click");
    const newboard = [...square];
    console.log(newboard);
    newboard[index] = xturn ? "X" : "O";
    setSquare(newboard);
    setXturn(!xturn);
    const winner = checkWinner(newboard);
    if (winner) {
      setWin(newboard[winner[0]]);
    }
  };
  const checkWinner = (newboard) => {
    for (let i = 0; i < winningCombination.length; i++) {
      const [a, b, c] = winningCombination[i];
      if (
        newboard[a] &&
        newboard[a] === newboard[b] &&
        newboard[b] === newboard[c]
      ) {
        return winningCombination[i];
      }
    }
    return null;
  };
  const handleReset = () => {
    setSquare(new Array(9).fill(null));
    setWin(null);
    setXturn(true);
  };
  return (
    <div>
      <h2>
        Let's play Tic-Tac-Teo <span style={{ color: "red" }}>Game</span>!
      </h2>
      <div className="square">
        <div className="row-board">
          {rendersquare(0)}
          {rendersquare(1)}
          {rendersquare(2)}
        </div>
        <div className="row-board">
          {rendersquare(3)}
          {rendersquare(4)}
          {rendersquare(5)}
        </div>
        <div className="row-board">
          {rendersquare(6)}
          {rendersquare(7)}
          {rendersquare(8)}
        </div>
      </div>
      <button onClick={handleReset} className="btn">
        {" "}
        Reset{" "}
      </button>

      <h2>
        {win && (
          <h2>
            <span style={{ color: "red" }}> {win} </span> is winner of this
            Game..
          </h2>
        )}
      </h2>
    </div>
  );
};

export default Tictacteo;
