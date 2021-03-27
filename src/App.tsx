import './App.css';
import { gameReducer } from './state/reducer';
import React, { useReducer } from 'react';
import { initialGameState } from './state/state';
import { GameContext } from './state/context';
import { PlayArea } from './components/Players/Players';
import { PlayersList } from './components/Players/PlayersList/PlayersList';
import { AddPlayer } from './components/Players/AddPlayer/AddPlayer';
import { GameStatus } from './components/Poker/GameStatus/GameStatus';

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      <div className='App'>
        <div className='Header'>
          <header>
            <p>React useReducer and useContext example Poker App</p>
          </header>
        </div>
        <div className='ContentArea'>
          <div className='LeftPanel'>
            <PlayersList />
          </div>
          <div className='MainContentArea'>
            <PlayArea />
          </div>
          <div className='RightPanel'>
            <GameStatus />
          </div>
        </div>
        <div className='Footer'>
          <AddPlayer />
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
