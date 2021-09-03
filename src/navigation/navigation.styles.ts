import { getColor } from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  activeIcon: {
    width: '100%',
    position: 'absolute',
    top: -10,
    borderTopWidth: 1,
    borderTopColor: getColor('bright-green')
  },
  tabBar: {
    backgroundColor: '#24263F',
    paddingVertical: 10
  },
  tab: {
    backgroundColor: '#24263F',
    borderTopColor: getColor('bright-green')
  },
  label: { fontFamily: 'MartianBThai-Regular' }
});

export default style;
