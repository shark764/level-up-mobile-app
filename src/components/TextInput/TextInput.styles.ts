import tailwind, { getColor } from 'tailwind-rn';

const styles = {
  iconInputContainer: [
    { borderWidth: 0.5 },
    tailwind('border-gray-200 bg-gray-600 px-4 py-6 flex flex-row items-start')
  ],
  description: tailwind('flex flex-row'),
  icon: tailwind('text-gray-400 mr-4'),
  text: tailwind('text-gray-400'),
  inputContainer: tailwind('bg-gray-600'),
  textInput: tailwind('bg-gray-600 p-0 text-gray-100'),
  placeholderColor: getColor('gray-100')
};

export default styles;
