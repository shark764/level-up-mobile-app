import tailwind from '@utils/tailwind';

const styles = {
  main: tailwind('pt-40'),
  backgroundImage: tailwind('flex'),
  mainText: tailwind('mb-28 flex items-center'),
  header: tailwind('mb-5'),
  textHeader: [tailwind('text-bright-green uppercase')],
  textSubHeader: tailwind('text-gray-light font-martian-400'),
  button: tailwind('mb-2'),
  footer: tailwind('mt-20 items-center'),
  buttonTitle: tailwind('text-white'),
  bottomText: tailwind('text-gray-light')
};

export default styles;
