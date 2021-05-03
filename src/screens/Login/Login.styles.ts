import { color } from 'react-native-reanimated';
import { getColor } from 'tailwind-rn';
import tailwind from '@utils/tailwind';

const styles = {
  main: tailwind('pt-2'),
  backSection: tailwind('pt-2 flex flex-row items-start'),
  backIcon: tailwind('text-white mb-10'),
  backText: tailwind('text-gray-light'),
  containerText : tailwind('items-start mb-5'),
  textHeader: tailwind('text-white'),
  containerInputs:  tailwind('mt-4 bg-gray-400'),
  containerBottom: tailwind('items-center my-2'),
  link: [
    {color:'#50E5C3'},
    tailwind('underline mb-10 mt-2')
  ],
  button: tailwind('mb-5 w-full'),
  buttonCircle: tailwind('w-16 h-16 rounded-full bg-white mx-5'),
  buttonTitle: tailwind('text-xl text-white'),
  mainFooter: tailwind('text-white'),
  subFooter: {color:'#50E5C3'},
  textDivider: tailwind('flex-row w-full pb-3 pt-3'),
  colDivider: getColor('gray-500'),
  socialMedia: tailwind(
    'flex flex-row justify-between content-center items-center pl-10 pr-10 pt-5 pb-5'
  ),
  socialMediaLogo: tailwind('w-14 h-14 ml-5 mr-5'),
};

export default styles;
