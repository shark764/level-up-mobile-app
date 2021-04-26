import * as React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import { Text } from '@components/Text';
import styles from './Card.styles';
import { useNavigation } from '@react-navigation/native';
export interface Props {
    data: any[],
    cardColor:string
}

const Card = ({ data, ...props }: Props) => {
    const { navigate } = useNavigation();
    const navigateTo = (screen: string) => {
        navigate(screen);
    };
    const displayCard = (card: any[], i: number,color:string) => {
        return (
            <View style={[styles.mainCard,{backgroundColor:props.cardColor}]} key={i}>
                <TouchableHighlight
                underlayColor={color}
                onPress={() => {
                    navigateTo(card[i][3]); 
                }}>
                    <View style={styles.cardContainer} >
                        <View style={styles.cardHeader}>
                            <View>
                                <Image style={{ width: 50, height: 50 }} source={{ uri: card[i][2] }} />
                            </View>
                            <View>
                                <Text type='heading-4' style={{ color: 'white', marginLeft: 15, paddingTop: 9 }}>
                                    {card[i][0]}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cardBody}>
                            <Text type='body-sm' style={{ color: '#C6D6EE', textAlign:'justify' }}>
                                {card[i][1]}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>

        );
    }
    return (<>{data.map((card, index, array) => displayCard(array, index, props.cardColor))}</>

    );
}

export default Card;