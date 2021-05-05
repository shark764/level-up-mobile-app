import { Container } from '@components/Container';
import { Text } from '@components/Text';
import React, { useState } from 'react';
import styles from './Consent.styles';
import { ScrollView, View } from 'react-native';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import { HeadSection } from '@components/HeadSection';

const Consent = () => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <Container background='dark'>
      <ScrollView>
        <View style={styles.main}>
          <HeadSection textStyle={styles.backText} backText='Back' />
        </View>
        <View>
          <Text type='heading-3' style={styles.headerText}>
            Consent
          </Text>
          <Text type='heading-6' style={styles.subHeaderText}>
            AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO DIGNISSIMOS DUCIMUS QUI
            BLANDITIIS
          </Text>
          <View style={styles.body}>
            <Text type='body-md' style={styles.bodyText}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio.
            </Text>
            <Text type='body-md' style={styles.bodyText}>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus.
            </Text>
          </View>
          <View style={[styles.flexRow, { marginTop: 30 }]}>
            <View style={{ marginRight: 10 }}>
              <CheckBox
                tintColors={{ true: '#6461EC', false: '' }}
                value={toggleCheckBox}
                onValueChange={(checkValue) => {
                  setToggleCheckBox(checkValue);
                }}
              />
            </View>
            <View>
              <Text type='heading-5' style={styles.bodyTerms}>
                I read and accept the terms
              </Text>
            </View>
          </View>
          <View>
            <View style={{ marginBottom: 20, marginTop: 25 }}>
              <Button
                onPress={() => {
                  navigateTo('SafetyVideo');
                }}
                title='Confirm'
                color='primary'
              />
            </View>
            <View>
              <Button
                onPress={() => {
                  navigateTo('Membership');
                }}
                title='Cancel'
                color='secondary'
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Consent;
