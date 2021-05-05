import tailwind from '@utils/tailwind';

const styles = {
  main: tailwind('pt-8'),
  backText: tailwind('text-white'),
  headerText: tailwind('mt-1 text-off-white'),
  subHeaderText: tailwind('mt-5 text-gray-light'),
  body:tailwind('mt-4'),
  bodyText:[{textAlign:'justify', color:'#9BB1D2'}, tailwind('mt-1.5')],
  bodyTerms:[{textAlign:'justify', color:'#C6D6EE'}, tailwind('mt-1.5')],
  flexRow:tailwind('flex flex-row')
};

export default styles;