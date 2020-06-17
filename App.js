import React from 'react';
import { ImageBackground } from 'react-native';
import {createStackNavigator,createAppContainer,defaultNavigationOptions} from 'react-navigation'
import firebase from 'firebase'
import Main from './screen/Main'
import Detail from './screen/detail'
import Menu from './screen/Menu'
import Year from './screen/year'
import Result from './screen/result'



const AppInteract = createStackNavigator({
  Main : Main,
  Detail : Detail,
  Menu : Menu,
  Year : Year,
  Result : Result,
  
},{
  initialRouteName : 'Menu',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#663399',
    },
      headerTintColor: '#f1e7fe',
      headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:18,
    },
  }
})
const AppContainer = createAppContainer(AppInteract)
export default class App extends React.Component {
  
  
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyCsotuYrH94JUziH7HzlsuglPFr-tUK98E",
      authDomain: "myprx125.firebaseapp.com",
      databaseURL: "https://myprx125.firebaseio.com",
      projectId: "myprx125",
      storageBucket: "myprx125.appspot.com",
      messagingSenderId: "462058523667",
      appId: "1:462058523667:web:c2f59b5b2d307bbf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  render() {
    return (
      
      <AppContainer/>
      
    )
  }
}
