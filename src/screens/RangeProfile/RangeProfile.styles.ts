import tailwind from '@utils/tailwind';

const styles = {
    headerContainer:[
        {borderBottomColor:'#50E5C3', height:270, borderWidth:1},
    ],
    header: tailwind('flex-row mt-3'),
    backText:tailwind('text-gray-light'),
    bodyHeaderContainer:[{borderBottomColor:'#5D5F83',borderWidth:1},tailwind('pl-5 pt-7 pb-10 pr-8')],
    members:[{ color: '#9BB1D2' }],
    subBodyContainer: tailwind('px-4'),
}
export default styles;
