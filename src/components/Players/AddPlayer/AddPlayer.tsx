import { useContext, useState } from 'react';
import { GameContext } from '../../../state/context';
import { addPlayer } from '../../../state/reducer';
import { Player, Status } from '../../../state/state';

export const AddPlayer = () => {
  const { dispatch } = useContext(GameContext);
  const [playerName, setPlayerName] = useState('');
  const handlePlayerName = (event: any) => {
    setPlayerName(event.target.value);
  };
  const handleSubmit = (event: any) => {
    const player: Player = {
      id: +new Date(),
      name: playerName,
      status: Status.NotStarted,
    };
    dispatch(addPlayer(player));
    setPlayerName('');
    event.preventDefault();
  };
  return (
    <div>
      <h4>Add New Player</h4>
      <form onSubmit={handleSubmit}>
        <input value={playerName} type='text' onChange={handlePlayerName} />
        <button type='submit' value='Submit' disabled={playerName === ''}>
          Add
        </button>
      </form>
    </div>
  );
};
