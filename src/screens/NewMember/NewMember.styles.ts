import { color } from 'react-native-reanimated';
import tailwind from 'tailwind-rn';

const styles = {
  main: [tailwind('items-center h-full')],
  memberPicture: [
    { marginTop: '70%', backgroundColor: '#393B60', width:96, height:96},
  ],
  body: tailwind('mt-10 mb-48'),
  bodyText: [{color:'#C6D6EE'}],
  button: [{bottom:0},tailwind('w-full')]
};

export default styles;
