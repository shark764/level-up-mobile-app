export interface AppData {
  email?: string;
}

export interface Achievement {
  achievement: string;
  rewardType: 'coin' | 'ruby';
  reward: number;
}

export interface Game {
  points: number;
  level: 1 | 4;
  gameType: 'standard' | 'multiplayer';
  time: string;
}
