import tailwind from 'tailwind-rn';

const styles = {
  main: tailwind('pt-8'),
  backText: tailwind('text-white'),
  headerText: tailwind('mt-1 text-white'),
  subHeaderText: [{ color: '#9BB1D2' }, tailwind('mt-5')],
  videoContainer: tailwind('mt-14'),
  bottomText: [{ color: '#9BB1D2' }, tailwind('mt-5')]
};

export default styles;
