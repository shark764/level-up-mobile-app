import React from 'react';
import {  View, Image } from 'react-native';

export interface Props {
    viewStyle: object,
    imageStyle: {width:number, height:number, backgroundColor:string},
    sourceImage:string,
}
 
const loginPicture = (props: Props) => {
    return (
      <View style={props.viewStyle}>
        <Image style={props.imageStyle} source={{uri: props.sourceImage}} />
      </View>
    );
}
 
export default loginPicture;