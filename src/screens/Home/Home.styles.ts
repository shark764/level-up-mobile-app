import tailwind from 'tailwind-rn';

const styles = {
  homeContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-40 pl-5 pr-5'),
  mainText: tailwind('mb-44'),
  header: tailwind('mb-5'),
  textHeader: tailwind('text-4xl font-bold text-white'),
  textSubHeader: tailwind('text-xl text-gray-500'),
  button: tailwind('mb-2'),
  footer: tailwind('items-center'),
  buttonTitle: tailwind('text-xl text-white'),
  bottomText: tailwind('text-sm text-gray-500')
};

export default styles;
