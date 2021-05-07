import tailwind from '@utils/tailwind';

const styles = {
  subtitle: tailwind('text-white mb-4'),
  center: tailwind('items-center'),
  spaceBetween: tailwind(
    'flex flex-row justify-between content-center items-center'
  ),
  scoreContainer: tailwind('flex-1 flex-row justify-between mb-8'),
  multiplayer: tailwind('items-center content-center px-4'),
  multiplayerAvatar: tailwind('mb-4'),
  backText: tailwind('text-off-white'),
  gameIcon: tailwind('text-bright-green mr-2'),
  progress: tailwind(
    'flex flex-row items-center content-center justify-center mb-9'
  ),
  gameOver: tailwind('flex h-full content-center items-center pt-36'),
  marginTop: { marginTop: '30%' }
};

export default styles;
