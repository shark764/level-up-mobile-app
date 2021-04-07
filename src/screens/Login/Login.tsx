import React from 'react';
import { SafeAreaView, Text, ScrollView, View, } from 'react-native';
import styles from './Login.styles';
import { faChevronLeft, } from '@fortawesome/free-solid-svg-icons';
import LoginPicture from './Components/LoginPicture';
import LoginHeader from './Components/LoginHeader';
import LoginTextInput from './Components/LoginTextInput';
import LoginBottom from './Components/LoginBottom';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



interface Props { }

const Login = (props: Props) => {
  const { navigate } = useNavigation();
  const navigateTo = (screen: string) => {
    navigate(screen);
  };
  return (
    <SafeAreaView style={[styles.loginContainer]}>
      <ScrollView>
        <View style={styles.main}>
          <View style={styles.backSection}>
            <FontAwesomeIcon style={styles.backIcon} icon={faChevronLeft} size={16}/>
            <Text style={styles.backText}> Back</Text> 
          </View>
          <LoginPicture viewStyle={styles.image} imageStyle={{width: 50, height: 50, backgroundColor: styles.imageColor}} sourceImage={'https://e7.pngegg.com/pngimages/413/262/png-clipart-table-square-shape-circle-textile-square-angle-furniture.png'}/>
          <View>
            <LoginHeader viewStyle={styles.containerText} textStyle={styles.textHeader}/>
            <LoginTextInput viewStyle={styles.containerInputs}/>
            <LoginBottom viewStyle={styles.containerBottom} linkStyle={styles.link} navigationLink={'ForgotPassword'} buttonStyle={styles.button} navigationButton={'SignUp'} buttonTittle={styles.buttonTitle} mainFooter={styles.mainFooter} subFooter={styles.subFooter}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
