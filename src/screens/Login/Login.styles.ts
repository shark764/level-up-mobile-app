import { color } from 'react-native-reanimated';
import tailwind, { getColor } from 'tailwind-rn';

const styles = {
  main: tailwind('pt-8 pl-5 pr-5'),
  backSection: tailwind('pt-2 flex flex-row items-start'),
  backIcon: tailwind('text-gray-500'),
  backText: tailwind('text-gray-500 mt-1 mb-8'),
  containerText : tailwind('items-start'),
  textHeader: tailwind('text-4xl font-bold text-white'),
  containerInputs:  tailwind('mt-4 bg-gray-400'),
  containerBottom: tailwind('items-center my-2'),
  link: [
    {color:'#50E5C3'},
    tailwind('underline mb-10 mt-2')
  ],
  button: tailwind('mb-5 w-full'),
  buttonTitle: tailwind('text-xl text-white'),
  mainFooter: tailwind('text-gray-500'),
  subFooter: {color:'#50E5C3'},
  textDivider: tailwind('flex-row w-full pb-3 pt-5'),
  colDivider: getColor('gray-500'),
};

export default styles;
