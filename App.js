import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import Intro from "./src/components/Scenes/Intro";

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="intro"
            hideNavBar={true}
            component={Intro}
            title="Intro"
            panHandlers={null}
          />
        </Scene>
      </Router>
      
    );
  }
}