import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
<<<<<<< 58c1ff5f1bf7995d6a8153dbb6bf76cfb1af79b9
  View,
  ScrollView,
  Navigator,
  TouchableOpacity
=======

  Image,
  TextInput, 

  View
>>>>>>> merge
} from 'react-native';

import SymptomEntry from './symptomEntry';
import SplashPage from './splashPage';
import LoginPage from './loginPage';
import MainPage from './mainPage';

class OneCare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "ip": "10.224.144.22:3000", // REPLACE WITH YOUR OWN IP ADDRESS (everything before :3000)!
      "text": "before API Call"};
  }
  fuckDan() {
    var obj = {
      method: 'GET',
      body: null,
      headers: {
        'Content-Type': 'application/json',
      }
    }
    fetch('http://'+ this.state.ip + '/fuckDan', obj)
    .then(function(res) {
      return res.json();
     })
     .then(function(parsed){
       this.setState({"text": parsed.message});
     }.bind(this))
    .catch(function(err){
      console.log("data not fetched", err);
    })

  }
  componentDidMount() {
    console.log("component has mounted");
    this.fuckDan();
  }

  onPressButtonGET () {
        fetch("https://api.github.com/users/kentonlin", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
          Alert.alert(
          "GET Response",
          "Search Query -> " + responseData
          )
           console.log("Search Query -> " + responseData)
        })
        .done();
    }

  render() {
<<<<<<< 58c1ff5f1bf7995d6a8153dbb6bf76cfb1af79b9
    // This will load splashPage.js on initialize
=======
    let pic = {
      uri: 'http://www.rxyoursite.com/assets/img/rx-logo.png'
    }; 
>>>>>>> merge
    return (
      <Navigator
        initialRoute={{id: 'SplashPage', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
      // <View style={styles.container}>
      //   <SymptomEntry style={styles.welcome}/>
      //   <Text style={styles.welcome}>
      //     Welcome to OneCare!
      //   </Text>
      //   <Text> {this.state.text}</Text>

      //   <Text style={styles.instructions}>
      //     To get started, edit index.android.js
      //   </Text>
      //   <Text style={styles.instructions}>
      //     Double tap R on your keyboard to reload,{'\n'}
      //     Shake or press menu button for dev menu
      //   </Text>
      // </View>
    );
  }
  // Navigator will load each page based on routeId
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage navigator={navigator} />
      );
    }
    if (routeId === 'SymptomEntry') {
      return (
        <SymptomEntry navigator={navigator} />
      );
    }

<<<<<<< 58c1ff5f1bf7995d6a8153dbb6bf76cfb1af79b9
    return this.noRoute(navigator);
  }

  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>请在 index.js 的 renderScene 中配置这个页面的路由</Text>
        </TouchableOpacity>
=======
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

        <Image source={pic} style={{width: 193, height: 110}}/>

      <UserTextInput/>

        <text> {this.onPressButtonGET()} </text>
>>>>>>> merge
      </View>
    );
  }
};

class UserTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Please enter your name' };
  }

  render() {
    return (
      <TextInput 
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8080',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('OneCare', () => OneCare);
AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
