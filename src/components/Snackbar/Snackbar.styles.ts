import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const styles = {
  common: StyleSheet.create({
    common: {
      position: 'absolute',
      bottom: 0,
      borderRadius: 0,
      margin: 0,
      padding: 10
    }
  }),
  custom: {
    error: tailwind('bg-red-medium'),
    success: tailwind('bg-green-medium'),
    info: tailwind('bg-blue-medium'),
    warning: tailwind('bg-yellow-medium')
  }
};

export default styles;
