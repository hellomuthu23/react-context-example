import { PlayArea } from '../Players/Players';
import { GameStatus } from './GameStatus/GameStatus';
import './Poker.css';
export const Poker = () => {
  return (
    <>
      <div>Poker Game</div>
      <div className='GameContainer'>
        <div className='PlayerContainer'>
          <PlayArea />
        </div>

        <div className='GameStatusContainer'>
          <GameStatus />
        </div>
      </div>
    </>
  );
};

export default Poker;
