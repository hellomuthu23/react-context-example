export interface GameState {
  players: Player[];
  gameName: string;
  winner: Player | null;
  gameStatus: Status;
}

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

export const initialGameState: GameState = {
  players: [],
  gameName: 'Game1',
  winner: null,
  gameStatus: Status.NotStarted,
};
