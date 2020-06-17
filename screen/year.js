import React from 'react'
import {TouchableOpacity,StyleSheet,ImageBackground,View,Text,Image,ScrollView} from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import {AdMobBanner,AdMobInterstitial} from 'expo';

AdMobInterstitial.setAdUnitID('ca-app-pub-6789872334744911/8809598702');
AdMobInterstitial.setTestDeviceID("EMULATOR");
export default class Year extends React.Component{
    static navigationOptions = {
        title: 'ดูดวงปี 2562',
      }

      constructor(props){
          super(props)
          this.state = {day:'',month:'',status:false}
      }

      onads = async () => {
        await AdMobInterstitial.requestAdAsync();
        await AdMobInterstitial.showAdAsync();
        
      };

      click(){
      
        var day = parseInt(this.state.day, 10)
        var zodiac = ''
        if(this.state.month == 'เมษายน'){
            if(day > 13){
                zodiac = 'ราศีเมษ'
            }else{
                zodiac = 'ราศีมีน'
            }
        }
        if(this.state.month == 'พฤษภาคม'){
            if(day > 13){
                zodiac = 'ราศีพฤษภ'
            }else{
                zodiac = 'ราศีเมษ'
            }
        }
        if(this.state.month == 'มิถุนายน'){
            if(day > 13){
                zodiac = 'ราศีเมถุน'
            }else{
                zodiac = 'ราศีพฤษภ'
            }
        }
        if(this.state.month == 'กรกฏาคม'){
            if(day > 14){
                zodiac = 'ราศีกรกฎ'
            }else{
                zodiac = 'ราศีเมถุน'
            }
        }
        if(this.state.month == 'สิงหาคม'){
            if(day > 16){
                zodiac = 'ราศีสิงห์'
            }else{
                zodiac = 'ราศีกรกฎ'
            }
        }
        if(this.state.month == 'กันยายน'){
            if(day > 16){
                zodiac = 'ราศีกันย์'
            }else{
                zodiac = 'ราศีสิงห์'
            }
        }
        if(this.state.month == 'ตุลาคม'){
            if(day > 15){
                zodiac = 'ราศีตุลย์'
            }else{
                zodiac = 'ราศีกันย์'
            }
        }
        if(this.state.month == 'พฤษจิกายน'){
            if(day > 16){
                zodiac = 'ราศีพิจิก'
            }else{
                zodiac = 'ราศีตุลย์'
            }
        }
        if(this.state.month == 'ธันวาคม'){
            if(day > 15){
                zodiac = 'ราศีธนู'
            }else{
                zodiac = 'ราศีพิจิก'
            }
        }
        if(this.state.month == 'มกราคม'){
            if(day > 13){
                zodiac = 'ราศีมังกร'
            }else{
                zodiac = 'ราศีธนู'
            }
        }
        if(this.state.month == 'กุมภาพันธ์'){
            if(day > 13){
                zodiac = 'ราศีกุมภ์'
            }else{
                zodiac = 'ราศีมังกร'
            }
        }
        if(this.state.month == 'มีนาคม'){
            if(day > 13){
                zodiac = 'ราศีมีน'
            }else{
                zodiac = 'ราศีกุมภ์'
            }
        }
        this.props.navigation.navigate('Result',{zodiac:zodiac})
      }
      renderbutton(){
          if(this.state.day == '' || this.state.month == '' ){
              return(<View style={styles.button}>
                <Text style={styles.text}>กรุณากรอกข้อมูล</Text>
              </View>)
          }else{
            return(
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>this.click()}><Text style={styles.text}>เช็คดวง</Text></TouchableOpacity>
              </View>
              )
          }
      }

      render() {
        date = [{value: '1',}, {value: '2',}, {value: '3',}, {value: '4',}, {value: '5',}, {value: '6',}
    , {value: '7',}, {value: '8',}, {value: '9',}, {value: '10',}, {value: '11',}
    , {value: '12',}, {value: '13',}, {value: '14',}, {value: '15',}, {value: '16',}
    , {value: '17',}, {value: '18',}, {value: '19',}, {value: '20',}, {value: '21',}
    , {value: '22',}, {value: '23',}, {value: '24',}, {value: '25',}, {value: '26',}
    , {value: '27',}, {value: '28',}, {value: '29',}, {value: '30',}, {value: '31',}];
        month = [{value:'มกราคม'},{value:'กุมภาพันธ์'},{value:'มีนาคม'},{value:'เมษายน'},{value:'พฤษภาคม'},{value:'มิถุนายน'}
        ,{value:'กรกฏาคม'},{value:'สิงหาคม'},{value:'กันยายน'},{value:'ตุลาคม'},{value:'พฤษจิกายน'},{value:'ธันวาคม'}]
        return (
            <ImageBackground style={{width: '100%', height: '100%'}} source ={{uri : 'https://i.pinimg.com/originals/f9/b3/4e/f9b34ed4dd3da69fa43a573c281d8f9e.jpg'}}>
         <ScrollView>
         <TouchableOpacity onPress={this.onads}><Image style={{height:250}} source ={{uri : 'https://firebasestorage.googleapis.com/v0/b/myprx125.appspot.com/o/source.gif?alt=media&token=448d0a6d-3186-45f6-aec6-dca2168313b4'}}></Image></TouchableOpacity>
         <View style={styles.container}>
              <View style={{padding:5}}>
               <Dropdown label='วัน' data={date} labelFontSize = {20} baseColor = '#f1e7fe' textColor = '#f1e7fe' 
               selectedItemColor = 'rgb(219, 44, 101)'
               onChangeText = {(text) => this.setState({day : text})}/>
                </View>
                <View style={{padding:5}}>
               <Dropdown label='เดือน' data={month} labelFontSize = {20} baseColor = '#f1e7fe' textColor = '#f1e7fe'
               selectedItemColor = 'rgb(219, 44, 101)'
               onChangeText = {(text) => this.setState({month : text})}/>
                </View>
             {this.renderbutton()}
          </View>
          
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
        container : {
            backgroundColor:'rgb(120, 70, 169)',
            height : 250,
            margin:10,
            marginTop:5,
            borderRadius:10
        },
        button:{
            backgroundColor:'rgb(219, 44, 101)',
            height : 60,
            margin:10,
            marginTop:20,
            borderRadius:10
        },
        text :{
            color:'rgb(255, 255, 255)',
            fontWeight:'700',
            fontSize:30,
            marginTop:10,
            textAlign:'center'
        },
        dropdown:{
            backgroundColor:'rgb(120, 70, 169)',
            height : 30,
            margin:10   
        },
        bottomBanner: {
            position: "absolute",
            bottom: 0
          }
})

