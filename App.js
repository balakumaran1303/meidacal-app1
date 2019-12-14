import React, { Component } from "react";
import { Scene, Router } from "react-native-router-flux";
import Intro from "./src/components/Scenes/Intro";
import Login from "./src/components/Scenes/Login";
import CreateAccount from "./src/components/Scenes/CreateAccount";
import DashBoard from "./src/components/Scenes/DashBoard"


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
          <Scene
            key="login"
            hideNavBar={true}
            component={Login}
            title="Login"
            panHandlers={null}
          />
          <Scene
            key="createAccount"
            hideNavBar={true}
            component={CreateAccount}
            title="CreateAccount"
            panHandlers={null}
          />
          <Scene
            key="dashBoard"
            hideNavBar={true}
            component={DashBoard}
            title="DashBoard"
            panHandlers={null}
          />
          
          
        </Scene>
      </Router>
      
    );
  }
}