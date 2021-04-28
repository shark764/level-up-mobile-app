// import tailwind from '@utils/tailwind';
import pStyles from '../../Progress.styles';
import { StyleSheet } from 'react-native';
import tailwind from '@utils/tailwind';

const styles = StyleSheet.create({
  spaceBetween: pStyles.spaceBetween,
  gameTypeStandard: tailwind('text-green'),
  gameTypeMulti: tailwind('text-magenta'),
  gameInfo: tailwind('ml-4'),
  time: tailwind('text-gray-medium'),
  points: tailwind('text-off-white font-martian-700')
});

export default styles;
