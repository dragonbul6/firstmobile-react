import React from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'

export default class Card extends React.Component{
    render(){
       return (
       <View style={style.container}>
          <Image style={style.Image} source = {{uri : this.props.img}}/>
        </View>
       )
    }
}

const style = StyleSheet.create({
    container: {
        height: 500,
        borderWidth:1,
        margin:10
    },
    Image:{
        height:500
    }
})
