import tailwind from '@utils/tailwind';

const styles = {
  scoreContainer: tailwind('flex-1 flex-row justify-between mb-8'),
  multiplayer: tailwind('items-center content-center px-4 mb-4'),
  multiplayerAvatar: tailwind('mb-4'),
  avatar: tailwind('mb-3'),
  userText: tailwind('text-off-white'),
  scoreButton: { width: 110 },
  scoreButtonContent: tailwind('py-1'),
  scoreButtonText: tailwind('text-xs')
};

export default styles;
