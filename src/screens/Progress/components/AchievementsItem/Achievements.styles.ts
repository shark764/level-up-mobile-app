import tailwind from '@utils/tailwind';
import pStyles from '../../Progress.styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  spaceBetween: pStyles.spaceBetween,
  achievement: tailwind('text-gray-light'),
  achievementFont: { color: '#9BA6B7' },
  reward: tailwind('text-off-white ml-1.5')
});

export default styles;
