import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  achievementContainer: tailwind('justify-start bg-charcoal-medium'),
  achievementLogo: tailwind('bg-charcoal-light rounded-sm items-center justify-center'),
  achievementLogoSize: { width: 65, height: 86 },
  reward: tailwind('text-off-white'),
  achievement: tailwind('ml-3 w-3/4'),
  titleFont: tailwind('text-off-white'),
  achievementFont: { color: '#9BA6B7' },
  button: tailwind('w-full m-1'),
  elementsContainer: tailwind('flex flex-row items-center'),
  progressBar: tailwind('ml-2 mr-2 w-3/4'),
  tick: tailwind('m-2 h-4 w-4'),
});

export default styles;
