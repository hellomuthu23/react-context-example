import { useContext } from 'react';
import { GameContext } from '../../../state/context';
import { resetGame } from '../../../state/reducer';
import { Status } from '../../../state/state';
import './GameStatus.css';
export const GameStatus = () => {
  const { state, dispatch } = useContext(GameContext);
  return (
    <div className='GameStatus'>
      <div className='Status'>
        <label>Status : {state.gameStatus}</label>
        <button onClick={() => dispatch(resetGame())}>Start New Game</button>
      </div>
      <Winner />
    </div>
  );
};

export const Winner = () => {
  const { state } = useContext(GameContext);
  return (
    <div className='Winner'>
      {state.gameStatus === Status.InProgress && (
        <label>
          In Lead : {state.winner?.name} by {state.winner?.value}
        </label>
      )}
      {state.gameStatus === Status.Finished && (
        <label>
          Winner: {state.winner?.name} by {state.winner?.value}
        </label>
      )}
    </div>
  );
};
