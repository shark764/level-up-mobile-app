import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: tailwind('mt-3 mb-9'),
  headSection: tailwind('pt-4 pb-4'),
  backText: tailwind('text-gray-light'),
  spaceBetween: tailwind(
    'flex flex-row justify-between content-center items-center'
  ),
  titleContainer: tailwind('mt-20 mb-8 items-center'),
  title: tailwind(' text-off-white'),
  list: tailwind('mb-20')
});

export default styles;
