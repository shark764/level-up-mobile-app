import { getColor } from 'tailwind-rn';
import tailwind from '@utils/tailwind';

const styles = {
    headSection: tailwind('pt-4 pb-4 pl-2'),
    backText: tailwind('text-gray-light'),
    headerContainer:[
        {borderBottomColor:'#50E5C3', height:210, borderWidth:1},
        tailwind('px-4')
    ],

    bodyContainer:[
        { flexDirection: 'column',backgroundColor:'#24263F'},
        tailwind('px-4')
    ],

    bodyHeaderContainer:tailwind('mb-7'),
}
export default styles;