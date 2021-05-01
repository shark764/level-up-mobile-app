import { color } from 'react-native-reanimated';
import tailwind, { getColor } from 'tailwind-rn';

const styles = {
  backSection: tailwind('pt-8 flex flex-row items-start'),
  backIcon: tailwind('text-white mt-1'),
  textWhite: tailwind('text-white'),
  body: tailwind('mt-10'),
  bodyHeaderText: tailwind('text-white'),
  bodyContent: tailwind('mt-5'),
  flexRow: tailwind('flex flex-row'),
  flexColumn: tailwind('flex flex-col'),
  icon: tailwind('mr-3'),
  button: tailwind('mt-2 mb-8')
};

export default styles;