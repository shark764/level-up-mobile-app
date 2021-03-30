import tailwind, { getColor } from 'tailwind-rn';

const styles = {
  iconInputContainer: tailwind(
    'border-2 border-gray-200 px-4 py-6 flex flex-row items-start'
  ),
  description: tailwind('flex flex-row'),
  icon: tailwind('text-gray-500 mr-4'),
  text: tailwind('text-gray-500'),
  inputContainer: tailwind('bg-gray-100'),
  textInput: tailwind('bg-gray-100 p-0 text-gray-100'),
  placeholderColor: getColor('gray-100')
};

export default styles;
