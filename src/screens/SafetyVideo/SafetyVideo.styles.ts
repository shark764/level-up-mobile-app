import tailwind, { getColor } from 'tailwind-rn';

const styles = {
  main: tailwind('pt-8'),
  backSection: tailwind('pt-2 flex flex-row items-start'),
  backIcon: tailwind('text-white mb-10'),
  backText: tailwind('text-white mb-8'),
  headerText: tailwind('mt-1 text-white'),
  subHeaderText: tailwind('mt-5 text-white'),
  videoContainer: tailwind('mt-14'),
  bottomText: [{color:'#C9C9C9'}, tailwind('mt-2')],
};

export default styles;