import tailwind from 'tailwind-rn';

const style = {
  enableLocationContainer: tailwind('h-full bg-black pt-44 px-5'),
  mainIconContainer: tailwind('items-center'),
  mainIcon: tailwind('text-white mb-20'),
  mainText: tailwind('items-center mb-36'),
  header: tailwind('text-2xl font-bold mb-4 text-white'),
  subheader: tailwind('text-gray-400 text-base'),
  buttonColor: 'bg-gray-400',
  mainButton: tailwind('mb-5 w-full'),
  buttonTitle: tailwind('text-gray-100 text-xl'),
  skipText: tailwind('text-sm text-gray-500'),
  bottom: tailwind('items-center')
};

export default style;
