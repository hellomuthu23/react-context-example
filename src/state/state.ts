export enum Status {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Finished = 'Finished',
}

export interface Player {
  name: string;
  id: number;
  status: Status;
  value?: number;
}
export interface GameState {
  players: Player[];
  name: string;
  winner: Player | null;
  gameStatus: Status;
}

export const initialGameState: GameState = {
  players: [],
  name: 'Game1',
  winner: null,
  gameStatus: Status.NotStarted,
};
