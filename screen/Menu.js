import React from 'react'
import {TouchableOpacity,View,ImageBackground,StyleSheet,Text,Image,ScrollView} from 'react-native'
import Button_m from '../components/button'
import {AdMobBanner} from 'expo';

export default class Menu extends React.Component{
  static navigationOptions = {
    title: 'Dreaming app',
  };

      render() {
        return (
          <ImageBackground style={{width: '100%', height: '100%'}} source ={{uri : 'https://i.pinimg.com/originals/f9/b3/4e/f9b34ed4dd3da69fa43a573c281d8f9e.jpg'}}>
       <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>ดูดวงปี2562</Text>
        </View>
        <View style={{marginTop:30}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Main')}>
         <Button_m text = 'ดูดวงไพ่ยิบซี'/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Year')}>
         <Button_m text = 'ดูดวงปี 2562'/>
          </TouchableOpacity>
          </View>
          <Image style={{height:281}} source ={{uri : 'https://firebasestorage.googleapis.com/v0/b/myprx125.appspot.com/o/icon.gif?alt=media&token=c2c6f51c-a562-497a-9b41-e4bdc3c75275'}}></Image>
          
        </ScrollView>
        <AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-6789872334744911/2216803025"
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
        />
          </ImageBackground>
        )
      }
}

const styles = StyleSheet.create({
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
  buttonsec : {
    marginBottom : 5
  },
  container : {
    backgroundColor:'rgb(120, 70, 169)',
    height : 60,
    margin:10,
    marginTop:50,
    borderRadius:10
},
text : {
  color:'rgb(255, 255, 255)',
  fontWeight:'700',
  fontSize:30,
  marginTop:10,
  textAlign:'center'
}

})



