import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  achievementContainer: tailwind('justify-start'),
  achievementLogo: tailwind('bg-charcoal-light w-14 h-20 rounded-md items-center justify-center'),
  reward: tailwind('text-off-white'),
  achievement: tailwind('ml-2 w-4/5'),
  titleFont: tailwind('text-off-white'),
  achievementFont: { color: '#9BA6B7' },
  button: tailwind('w-full m-1'),
  progressBarContainer: tailwind('flex flex-row'),
  progressBar: tailwind('ml-2 mr-2 w-3/4'),
});

export default styles;
