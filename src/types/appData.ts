export interface AppData {
  showPermissionsScreen: boolean;
  accessToken: string;
  authToken: string;
  forgotEmail: string;
}

export interface UserData {
  email: string;
  password: string;
}

export interface Achievement {
  title: string;
  achievement: string;
  rewardType: 'coin' | 'ruby';
  reward: number;
  progress: number;
}

export interface Game {
  points: number;
  level: 1 | 4;
  gameType: 'standard' | 'multiplayer';
  time: string;
  players: Player[];
  scores: GameScore[];
  history: GameScore[];
  finished?: boolean;
}

export interface Player {
  id: number;
  name: string;
  tag?: string;
}

export interface GameScore {
  player: Player;
  score: number;
}

export type SemanticColors = 'error' | 'info' | 'warning' | 'success';
