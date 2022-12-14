import tailwind from '@utils/tailwind';

const style = {
  enableLocationContainer: tailwind('pt-2'),
  backText: tailwind('text-gray-light'),
  mainIconContainer: tailwind('items-center mt-24 mb-12'),
  mainIcon: tailwind('text-gray-100 mb-20'),
  mainText: tailwind('items-center mb-12'),
  header: tailwind('mb-2 text-white font-martian-700'),
  subheader: tailwind('text-gray-medium'),
  mainButton: tailwind('mb-1.5 w-full'),
  buttonTitle: tailwind('text-white'),
  skipText: tailwind('text-sm text-gray-500'),
  bottom: tailwind('items-center '),
  location: tailwind('w-32 h-40'),
  doneButton: tailwind('w-full mt-8')
};

export default style;
