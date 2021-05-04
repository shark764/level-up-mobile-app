import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  spaceBetween: tailwind(
    'flex flex-row justify-between content-center items-center'
  ),
  itemContainer: tailwind('rounded mb-2 py-4 px-5'),
  itemContainerBg: { backgroundColor: '#24263F' }
});

export default styles;
