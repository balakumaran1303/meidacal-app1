import React, {Component} from 'react';
import {View,Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  title:{
    fontSize: 40,
  }
});

export default class Intro extends Component {
  render() {
    return (
      <View >
        <Text style={styles.title}>
          police police
        </Text>
      </View>
    );
  }
}
