import tailwind from '@utils/tailwind';

const styles = {
  signUpContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-2'),
  mainText: tailwind('mb-8'),
  backText: tailwind('text-gray-light'),
  titleSection: tailwind('mb-5'),
  textTitle: [tailwind('text-4xl text-white')],
  input: tailwind('mb-3'),
  button: tailwind('mt-24 mb-2'),
  buttonTitle: tailwind('text-xl text-white'),
  haveAccountContainer: tailwind('mt-3 mb-4 justify-center'),
  labelText: tailwind('text-center text-gray-medium'),
  loginText: tailwind('text-center font-bold text-bright-green-light'),
};

export default styles;
