import tailwind from 'tailwind-rn';

const styles = {
  main: [tailwind('items-center')],
  memberPicture: [
    { marginTop: '50%', backgroundColor: '#393B60' },
    tailwind('w-40 h-40')
  ],
  body: tailwind('mt-10 mb-20'),
  bodyText: [tailwind('text-white')],
  button: tailwind('w-full')
};

export default styles;
