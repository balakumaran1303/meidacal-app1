import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Actions} from 'react-native-router-flux';



const styles = StyleSheet.create({
  title: {
    fontSize: 40,
  },
  image: {
    width: 320,
    height: 320,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'sathiya',
    text: 'Description.\nSay something cool',
    image: require('../../assets/intro.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'sathiya',
    text: 'Other cool stuff',
    image: require('../../assets/intro1.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  }
];

export default class Intro extends Component {
  _onDone = () => {
      Actions.login();
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
      />
    );
  }
}
