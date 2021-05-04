import tailwind, { getColor } from 'tailwind-rn';

const styles = {
  loginContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-8 pl-5 pr-5'),
  containerText: tailwind('items-center'),
  textHeader: tailwind('text-3xl font-bold text-white'),
  button: tailwind('mt-20 w-full'),
  buttonTitle: tailwind('text-xl text-white'),
  iconContainer: tailwind('flex-col items-center mt-40 mb-20'),
  icon: tailwind('bg-gray-400 w-40 h-40')
};

export default styles;
