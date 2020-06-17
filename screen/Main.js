import React from 'react'
import {TouchableOpacity,StyleSheet,ImageBackground,Text,View} from 'react-native'
import Card from '../components/Card'

export default class Main extends React.Component{
    static navigationOptions = {
        title: 'ไพ่ยิบซีทำนายความรัก',
      };
      
      constructor(props){
          super(props)
          this.state = {data : []}
      }

      componentWillMount(){
        alert('คลิกที่ไพ่เพื่อเป็นการสุ่มไพ่ให้แก่คุณ')  
      }

      Random(){
        var RandomNumber = Math.floor(Math.random() * 20) + 0
        this.props.navigation.navigate('Detail',{number : RandomNumber})
      }


      render() {
        return (
          <ImageBackground source={{uri : 'https://cdn.pixabay.com/photo/2019/01/02/03/58/background-3907970_960_720.jpg'}}
          style={{width: '100%', height: '100%'}}>
        <TouchableOpacity onPress={()=>this.Random()}>
          <Card img = 'http://horoscope.teenee.com/resources/img/tarot/back.png'/>
          </TouchableOpacity>
          <View style={styles.alert}>
            <Text style={{fontSize:15,fontWeight:'bold',textAlign:'center',color:'#f1e7fe'}}>คำเตือน: ไพ่ยิปซีความรักเป็นไพ่ที่มีพลัง มีอำนาจลึกลับ จึงไม่ควรดูเกินวันละ 1 ครั้ง เพราะไพ่อาจจะเป็นผู้กำหนดชีวิตคุณเสียเอง และสิ่งที่ตามมาอาจเป็นผลร้ายมากกว่าผลดี</Text>
          </View>
          </ImageBackground>
         
        )
      }
}

const styles = StyleSheet.create({
  alert : {
            backgroundColor:'rgb(219, 44, 101)',
            height : 100,
            padding : 10,
           
            
  }
})

