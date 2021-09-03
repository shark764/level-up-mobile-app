import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  fullScroll: tailwind('h-full'),
  mainContainer: tailwind('flex-row items-center'),
  mainText: tailwind('flex'),
  avatar: tailwind('mr-4'),
  userName: tailwind('text-off-white'),
  changeProfile: tailwind('text-bright-green')
});

export default style;
