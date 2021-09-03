import React, { ReactNode } from 'react';
import { Dialog as PaperDialog, Portal } from 'react-native-paper';
import styles from './Dialog.styles';

interface Props {
  children: ReactNode;
  visible: boolean;
  onDismiss: () => void;
}
const Dialog = ({ children, visible, onDismiss }: Props) => (
  <Portal>
    <PaperDialog
      visible={visible}
      onDismiss={onDismiss}
      style={[styles.dialogContainer]}>
      <PaperDialog.Content>{children}</PaperDialog.Content>
    </PaperDialog>
  </Portal>
);

export default Dialog;
