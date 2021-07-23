import { SemanticColors } from '@app-types/appData';
import { Text } from '@components/Text';
import React, { ComponentProps } from 'react';
import { useWindowDimensions, Platform } from 'react-native';
import { Snackbar as PaperSnackbar } from 'react-native-paper';
import myStyles from './Snackbar.styles';

type SnackbarProps = ComponentProps<typeof PaperSnackbar> & {
  type: SemanticColors;
};
const Snackbar = ({ style, type, duration, ...props }: SnackbarProps) => {
  const { width } = useWindowDimensions();
  return (
    <PaperSnackbar
      duration={duration || 3000}
      style={[
        Platform.OS === 'ios' && { width },
        myStyles.common.common,
        myStyles.custom[type],
        style
      ]}
      {...props}>
      <Text type='body-semi'>{props.children}</Text>
    </PaperSnackbar>
  );
};

export default Snackbar;
