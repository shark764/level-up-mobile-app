import tailwind, { getColor } from 'tailwind-rn';

const styles = {
  loginContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-14 pl-5 pr-5'),
  backSection: tailwind('pt-2 flex flex-row items-start'),
  backIcon: tailwind('text-gray-500'),
  backText: tailwind('text-gray-500 pb-20'),
  image: tailwind('items-center pb-5'),
  containerText : tailwind('items-center my-2'),
  textHeader: tailwind('text-4xl font-bold text-white'),
  containerInputs: tailwind('mt-4 bg-gray-400'),
  containerBottom : tailwind('items-center my-2'),
  link: tailwind('underline text-gray-500 mb-10 mt-2'),
  button: tailwind('mb-5'),
  buttonTitle: tailwind('text-xl text-white'),
  mainFooter: tailwind('text-gray-500'),
  subFooter: tailwind('text-white'),
  imageColor: getColor('gray-500'),

};

export default styles;