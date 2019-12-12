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
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../assets/intro.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../assets/intro3.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../assets/intro2.jpeg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
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
