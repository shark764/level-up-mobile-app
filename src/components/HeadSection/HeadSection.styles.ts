import tailwind from '@utils/tailwind';

const styles = {
  headerSection: tailwind(
    'pt-2 pb-10 flex flex-row justify-between items-center'
  ),
  backSection: tailwind('flex flex-row items-center'),
  backIcon: tailwind('text-gray-light'),
  imageDimensions: { width: '1.875rem', heigth: '1.875rem' }
};

export default styles;
