import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

export default class Button_m extends React.Component{
    render(){
       return (
       <View style={styles.button}>
          <Text style={{fontSize:20,fontWeight:'bold',marginTop:20,textAlign:'center',color:'rgb(255, 255, 255)'}}>{this.props.text}</Text>
        </View>
       )
    }
}
const styles = StyleSheet.create({
    button:{
      backgroundColor:'rgb(219, 44, 101)',
      height : 60,
      margin:10,
      marginTop:20,
      borderRadius:10
  },
  })
