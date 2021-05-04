import tailwind from '@utils/tailwind';

const styles = {
  fpContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-14 pl-5 pr-5'),
  backText: tailwind('text-gray-light'),
  containerText: tailwind('my-2'),
  textHeader: tailwind('text-4xl font-bold text-white'),
  textSubHeader: tailwind('text-xl text-gray-400'),
  containerInputs: tailwind('mt-10 bg-gray-400'),
  button: tailwind('mt-8 w-full'),
  buttonTitle: tailwind('text-xl text-white'),
  verication: tailwind('my-5'),
  mainFooter: tailwind('text-gray-500'),
  subFooter: tailwind('text-white'),
  containerBottom: tailwind('my-10 items-center')
};

export default styles;
