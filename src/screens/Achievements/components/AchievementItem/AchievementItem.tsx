import React, { useState } from 'react';
import { Text } from '@components/Text';
import { Image, View } from 'react-native';
import { ListItem } from '@components/ListItem';
import { ProgressBar } from '@components/ProgressBar';
import { Button } from '@components/Button';
import { DialogWindow } from '@components/DialogWindow';
// @ts-ignore
import coin from '@assets/images/coin.png';
// @ts-ignore
import ruby from '@assets/images/ruby.png';
// @ts-ignore
import yellow_circle from '@assets/images/yellow-circle.png';
import styles from './AchievementItem.styles';

interface Props {
  title: string;
  achievement: string;
  rewardType: 'coin' | 'ruby';
  reward: number;
  progress: number;
}

type ButtonVisibility = {
  [key: string]: boolean | undefined;
};

const AchievementItem = (props: Props) => {
  const message = 'You earned +' + props.reward + ' points';
  const [visible, setVisible] = useState(false);

  const _toggleDialog = () => () =>{
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const _getVisible = () => !!visible;

  return (
    <ListItem itemStyle={styles.achievementContainer}>
      <View style={styles.achievementLogo}>
        <Image source={props.rewardType === 'coin' ? coin : ruby} />
        <Text type='heading-3' style={styles.reward}>
          {props.reward}
        </Text>
      </View>
      <View style={styles.achievement}>
        <Text type='body-semi' style={styles.titleFont}>
          {props.title}
        </Text>
        {props.progress === 1 ?
          <Button
            style={styles.button}
            onPress={_toggleDialog()}
            title='Claim'
            color='primary'
          />
        :
          <View>
            <Text type='body' style={styles.achievementFont}>
              {props.achievement}
            </Text>
            <View style={styles.progressBarContainer}>
              <ProgressBar style={styles.progressBar} progress={props.progress} color='#40CDAD' />
              <Text type='body' style={styles.achievementFont}>
                {props.progress*100}/100
              </Text>
            </View>
          </View>
        }
      </View>
      <DialogWindow
        title='Congrats!'
        text={message}
        icon={yellow_circle}
        visible={_getVisible()}
        close={_toggleDialog()}
      />
    </ListItem>
  );
};

export default AchievementItem;
