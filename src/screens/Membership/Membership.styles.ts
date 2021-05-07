import tailwind from '@utils/tailwind';

const styles = {
  backText: tailwind('text-gray-light'),
  backIcon: tailwind('text-white mt-1'),
  listIcon: tailwind('mt-0'),
  textWhite: tailwind('text-white'),
  body: tailwind('mt-1'),
  bodyHeaderText: tailwind('text-white'),
  bodyContent: tailwind('mt-5'),
  flexRow: tailwind('flex flex-row'),
  flexColumn: tailwind('flex flex-col'),
  icon: [
    tailwind('mr-3 mt-1'),
    { backgroundColor: 'white', borderRadius: 100, height: 16 }
  ],
  button: tailwind('mt-2 mb-8')
};

export default styles;
