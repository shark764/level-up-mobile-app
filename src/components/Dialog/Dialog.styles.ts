import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  dialogContainer: tailwind(
    'absolute inset-x-0 bottom-0 pt-10 m-0 rounded-t-2xl bg-white'
  )
});

export default style;
