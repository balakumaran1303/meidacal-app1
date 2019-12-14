import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  BackHandler,
} from 'react-native';
import {fonts} from '../../styles/StyleSheet';
import {Actions} from 'react-native-router-flux';

const styles = StyleSheet.create({
  commonContainerBg: {
    flex: 1,
    backgroundColor: 'black',
  },
  commonContainerWrapper: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 35,
    paddingBottom: 35,
  },
  emptyCardHeading: {
    marginBottom: 35,
  },
  commonTitle: {
    fontSize: 32,
    fontFamily: fonts.bold,
    letterSpacing: 0.81,
    lineHeight: 39,
    color: '#fff',
  },

  // input text
  signForm: {
    marginBottom: 40,
  },
  formLabel: {
    color: '#fff',
    fontSize: 14,
    fontFamily: fonts.regular,
    letterSpacing: 0.35,
    lineHeight: 22,
    marginBottom: 10,
  },
  inputText: {
    borderRadius: 8,
    backgroundColor: '#333333',
    height: 50,
    paddingLeft: 20,
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.regular,
    letterSpacing: 0.4,
    lineHeight: 22,
  },
  passwordStyle: {
    borderRadius: 8,
    backgroundColor: '#333333',
    height: 50,
    paddingLeft: 20,
    color: '#fff',
    fontSize: 16,
    fontFamily: fonts.regular,
    letterSpacing: 0.4,
    lineHeight: 22,
  },
  visibilityBtn: {
    position: 'absolute',
    right: 3,
    height: 40,
    width: 35,
    padding: 5,
    top: 45,
  },
  emailSec: {
    marginBottom: 30,
  },
  fullWidthButton: {
    marginTop: 10,
  },
  signWithGoogle: {
    marginBottom: 40,
  },
  createAccountText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
    fontFamily: fonts.regular,
    letterSpacing: 0.35,
    lineHeight: 22,
  },
  createAccountLink: {
    color: '#F9D15C',
    fontSize: 14,
    fontFamily: fonts.bold,
    letterSpacing: 0.35,
    lineHeight: 22,
    paddingLeft: 10,
  },
  createAccount: {
    flexDirection: 'row',
  },
  googleWidth: {
    width: 100,
  },
});

export default class Login extends Component {
  constructor() {
    super();
    this.state = {hidePassword: true};
  }
  managePasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  onInputLabelPressed = () => {
    this.setState({hidden: !this.state.hidden});
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.back_Button_Press,
    );
  }

  back_Button_Press = () => {
    Actions.intro();
    return true;
  };

  render() {
    const {} = this.state;

    return (
      <View style={styles.commonContainerBg}>
        <ScrollView showsVerticalScrollIndicator={true}>
          <View style={styles.commonContainerWrapper}>
            {/* empty card heading */}
            <View style={styles.emptyCardHeading}>
              <Text style={styles.commonTitle}>Sign in</Text>
            </View>

            {/* sign in form */}

            <View style={styles.signForm}>
              <View style={styles.emailSec}>
                <Text style={styles.formLabel}>Email Id</Text>
                <TextInput
                  style={styles.inputText}
                  placeholder="Enter your email id"
                  placeholderTextColor={'#ffffff66'}
                />
              </View>

              <View style={styles.emailSec}>
                <Text style={styles.formLabel}>Password</Text>
                <TextInput
                  style={styles.passwordStyle}
                  placeholder="Enter your password"
                  placeholderTextColor={'#ffffff66'}
                  underlineColorAndroid="transparent"
                  secureTextEntry={this.state.hidePassword}
                />
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.visibilityBtn}
                  onPress={this.managePasswordVisibility}>
                  <Image
                    source={
                      this.state.hidePassword
                        ? require('../../assets/images/hide.png')
                        : require('../../assets/images/show.png')
                    }
                    style={styles.btnImage}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.fullWidthButton}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    backgroundColor: "#f6f6f6",
                    height: 52,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 3,
                  }}
                  onPress={() => Actions.dashBoard()}
                  >
                  <Text style={(color = 'white')}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* sign in with google */}
            <View style={styles.signWithGoogle}>
              <Text style={styles.formLabel}>or sign in with</Text>
              <TouchableOpacity style={styles.googleWidth}>
                <Image source={require('../../assets/images/googleimg.png')} />
              </TouchableOpacity>
            </View>

            {/* create account */}
            <View style={styles.createAccount}>
              <Text style={styles.createAccountText}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => Actions.createAccount()}>
                <Text style={styles.createAccountLink}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
