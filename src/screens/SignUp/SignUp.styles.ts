import tailwind from 'tailwind-rn';

const styles = {
  signUpContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-5 pl-5 pr-5'),
  mainText: tailwind('mb-8'),
  headerSection: tailwind('pt-2 pb-10 flex flex-row justify-between'),
  backSection: tailwind('flex flex-row'),
  backIcon: tailwind('text-gray-500'),
  backText: tailwind('text-gray-500'),
  stepsText: tailwind('text-gray-500'),
  titleSection: tailwind('mb-5'),
  textTitle: tailwind('text-4xl font-bold text-white'),
  input: tailwind('mb-3'),
  button: tailwind('mt-2 mb-2'),
  buttonTitle: tailwind('text-xl text-white'),
  signUpWithContainer: tailwind('mt-3 mb-3 justify-center'),
  haveAccountContainer: tailwind('mt-3 mb-4 justify-center'),
  labelText: tailwind('text-center text-gray-100'),
  loginText: tailwind('text-center font-bold text-gray-100'),
};

export default styles;
