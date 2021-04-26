export interface AppData {
  email?: string;
}

export interface Achievement {
  achievement: string;
  rewardType: 'coin' | 'ruby';
  reward: number;
}
