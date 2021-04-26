import tailwind from '@utils/tailwind';

const styles = {
  signUpContainer: tailwind('h-full bg-black'),
  main: tailwind('pt-2'),
  mainText: tailwind('mb-8'),
  headerSection: tailwind('pt-2 pb-10 flex flex-row justify-between'),
  backSection: tailwind('flex flex-row'),
  backIcon: tailwind('text-gray-500'),
  backText: tailwind('text-gray-light'),
  stepsText: tailwind('text-gray-500'),
  titleSection: tailwind('mb-5'),
  textTitle: [tailwind('text-4xl text-white')],
  button: tailwind('mt-5 mb-5'),
  signUpWithContainer: tailwind('mt-3 mb-3 justify-center'),
  haveAccountContainer: tailwind('mt-3 mb-4 justify-center'),
  labelText: tailwind('text-center text-gray-medium'),
  loginText: tailwind('text-center font-bold text-bright-green-light'),
  socialMedia: tailwind(
    'flex flex-row justify-between content-center items-center pl-10 pr-10 pt-5 pb-5'
  ),
  socialMediaLogo: tailwind('w-14 h-14')
};

export default styles;
