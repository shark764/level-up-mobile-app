import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headSection: tailwind('pt-4 pb-4'),
  backText: tailwind('text-gray-light font-martian-500'),
  title: tailwind('mb-5 text-off-white'),
  achievementsList: tailwind('mb-5 items-center')
});

export default styles;
