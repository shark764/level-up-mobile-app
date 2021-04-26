import tailwind, { getColor } from 'tailwind-rn';

const styles = {
    headerContainer:[
        {borderBottomColor:'#50E5C3', height:250, borderWidth:1},
        tailwind('px-4')
    ],

    bodyContainer:[
        { flexDirection: 'column',backgroundColor:'#24263F'},
        tailwind('px-4')
    ],

    bodyHeaderContainer:tailwind('mb-7'),
}
export default styles;