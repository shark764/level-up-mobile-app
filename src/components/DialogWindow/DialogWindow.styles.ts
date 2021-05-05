import tailwind from '@utils/tailwind';
import { Dimensions } from 'react-native';

const styles = {
  container: tailwind('m-3 items-center'),
  windowSize: { maxHeight: 0.6 * Dimensions.get('window').height },
  content: tailwind('bg-off-white rounded-lg'),
  icon: [tailwind('m-2'), {width: 95, height: 92}],
  textColor: tailwind('text-charcoal-light')
};

export default styles;
