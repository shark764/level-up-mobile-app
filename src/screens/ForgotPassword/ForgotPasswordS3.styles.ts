import tailwind from '@utils/tailwind';

const styles = {
  loginContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-8 pl-5 pr-5'),
  backText: tailwind('text-gray-light'),
  containerText : tailwind('items-start'),
  textHeader: tailwind('text-4xl font-bold text-white'),
  textSubHeader: tailwind('text-xl text-gray-400 mt-5 mb-16'),
  containerInputs: tailwind('mt-4 bg-gray-400'),
  button: tailwind('mb-5 mt-10 w-full'),
  buttonTitle: tailwind('text-xl text-white'),
};

export default styles;