import React,{useState} from 'react';
import './App.css';

function App() {
  const [diceNumber, setDiceNumber] = useState(0);
  const [activePlayer, setActivePlayer] = useState('A');
  const [firstPlayerSteps, setFirstPlayerSteps] = useState(0);
  const [secondPlayerSteps, setSecondPlayerSteps] = useState(0);
  const [winner, setWinner] = useState("");

  function handleRoll() {

    const randomDiceNumber = Math.floor(Math.random() * 6) + 1;

    setDiceNumber(randomDiceNumber);

    if (activePlayer === 'A' && firstPlayerSteps + randomDiceNumber < 15) {
      setFirstPlayerSteps(firstPlayerSteps + randomDiceNumber);
      if (firstPlayerSteps + randomDiceNumber === 14) {
        setWinner("Player A");
        setTimeout(() => {
          alert(
            `Player A won the game 🎉 and Player B lost the game 😪 by ${14 - secondPlayerSteps
            } tiles`
          );
        }, 500);
        setTimeout(() => {
          setFirstPlayerSteps(0);
          setSecondPlayerSteps(0);
          setActivePlayer('A');
          setWinner("");
        }, 10000);
      }
    }
    if (activePlayer === 'B' && secondPlayerSteps + randomDiceNumber < 15) {
      setSecondPlayerSteps(secondPlayerSteps + randomDiceNumber);
      if (secondPlayerSteps + randomDiceNumber === 14) {
        setWinner("Player B");
        setTimeout(() => {
          alert(
            `Player B won the game 🎉 and Player A lost the game 😪 by ${14 - firstPlayerSteps
            } tiles`
          );
        }, 500);
        setTimeout(() => {
          setFirstPlayerSteps(0);
          setSecondPlayerSteps(0);
          setActivePlayer('B');
          setWinner("");
        }, 10000);
      }
    }
    setActivePlayer(activePlayer === 'A' ? 'B' : 'A');
  }

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">🎲ROLL FOR VICTORY🏁</h1>
      </div>
      <div className={winner ? "winner blink" : "winner"}>WINNER {winner ? winner + "🥇" : ""}</div>
      <div className="game-container">
        <div className="player">
          <div className="player-steps">
            <div className={firstPlayerSteps === 14 ? 'step purple' : 'step'}>14</div>
            <div className={firstPlayerSteps === 13 ? 'step purple' : 'step'}>13</div>
            <div className={firstPlayerSteps === 12 ? 'step purple' : 'step'}>12</div>
            <div className={firstPlayerSteps === 11 ? 'step purple' : 'step'}>11</div>
            <div className={firstPlayerSteps === 10 ? 'step purple' : 'step'}>10</div>
            <div className={firstPlayerSteps === 9 ? 'step purple' : 'step'}>9</div>
            <div className={firstPlayerSteps === 8 ? 'step purple' : 'step'}>8</div>
            <div className={firstPlayerSteps === 7 ? 'step purple' : 'step'}>7</div>
            <div className={firstPlayerSteps === 6 ? 'step purple' : 'step'}>6</div>
            <div className={firstPlayerSteps === 5 ? 'step purple' : 'step'}>5</div>
            <div className={firstPlayerSteps === 4 ? 'step purple' : 'step'}>4</div>
            <div className={firstPlayerSteps === 3 ? 'step purple' : 'step'}>3</div>
            <div className={firstPlayerSteps === 2 ? 'step purple' : 'step'}>2</div>
            <div className={firstPlayerSteps === 1 ? 'step purple' : 'step'}>1</div>
          </div>
          <div className="player-info">
            <div className="player-name">Player A</div>
            <button
              className={activePlayer === 'A' ? ' roll-button active' : 'roll-button'}
              disabled={activePlayer === 'B'}
              onClick={handleRoll}
            >
              ROLL
            </button>
          </div>
        </div>
        <div className="dice purple">{diceNumber}</div>
        <div className="player">
          <div className="player-steps">
            <div className={secondPlayerSteps === 14 ? 'step purple' : 'step'}>14</div>
            <div className={secondPlayerSteps === 13 ? 'step purple' : 'step'}>13</div>
            <div className={secondPlayerSteps === 12 ? 'step purple' : 'step'}>12</div>
            <div className={secondPlayerSteps === 11 ? 'step purple' : 'step'}>11</div>
            <div className={secondPlayerSteps === 10 ? 'step purple' : 'step'}>10</div>
            <div className={secondPlayerSteps === 9 ? 'step purple' : 'step'}>9</div>
            <div className={secondPlayerSteps === 8 ? 'step purple' : 'step'}>8</div>
            <div className={secondPlayerSteps === 7 ? 'step purple' : 'step'}>7</div>
            <div className={secondPlayerSteps === 6 ? 'step purple' : 'step'}>6</div>
            <div className={secondPlayerSteps === 5 ? 'step purple' : 'step'}>5</div>
            <div className={secondPlayerSteps === 4 ? 'step purple' : 'step'}>4</div>
            <div className={secondPlayerSteps === 3 ? 'step purple' : 'step'}>3</div>
            <div className={secondPlayerSteps === 2 ? 'step purple' : 'step'}>2</div>
            <div className={secondPlayerSteps === 1 ? 'step purple' : 'step'}>1</div>
          </div>
          <div className="player-info">
            <div className="player-name">Player B</div>
            <button
              className={activePlayer === 'B' ? 'roll-button active' : 'roll-button'}
              disabled={activePlayer === 'A'}
              onClick={handleRoll}
            >
              ROLL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
