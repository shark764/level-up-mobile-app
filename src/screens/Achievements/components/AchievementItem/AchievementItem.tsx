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
// @ts-ignore
import tick from '@assets/images/tick.png';
import styles from './AchievementItem.styles';

interface Props {
  title: string;
  achievement: string;
  rewardType: 'coin' | 'ruby';
  reward: number;
  progress: number;
}

const AchievementItem = (props: Props) => {
  const message = 'You earned +' + props.reward + ' points';
  const [visible, setVisible] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const _toggleDialog = () => () => {
    if (visible) {
      setVisible(false);
      setClaimed(true);
    } else {
      setVisible(true);
    }
  };

  const _getVisible = () => !!visible;

  return (
    <ListItem style={styles.achievementContainer}>
      <View style={[styles.achievementLogo, styles.achievementLogoSize]}>
        <Image source={props.rewardType === 'coin' ? coin : ruby} />
        <Text type='heading-3' style={styles.reward}>
          {props.reward}
        </Text>
      </View>
      <View style={styles.achievement}>
        <Text type='body-semi' style={styles.titleFont}>
          {props.title}
        </Text>
        {(props.progress !== 1 || (props.progress === 1 && claimed)) && (
          <Text type='body-sm' style={styles.achievementFont}>
            {props.achievement}
          </Text>
        )}
        {props.progress !== 1 && (
          <View style={styles.elementsContainer}>
            <ProgressBar
              style={styles.progressBar}
              progress={props.progress}
              color='#40CDAD'
            />
            <Text type='body' style={styles.achievementFont}>
              {props.progress * 100}/100
            </Text>
          </View>
        )}
        {props.progress === 1 && !claimed && (
          <Button
            style={styles.button}
            onPress={_toggleDialog()}
            title='Claim'
            color='primary'
          />
        )}
        {props.progress === 1 && claimed && (
          <View style={styles.elementsContainer}>
            <Image source={tick} style={styles.tick} />
            <Text type='body-sm' style={styles.achievementFont}>
              Completed
            </Text>
          </View>
        )}
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
