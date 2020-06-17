import React from 'react'
import {View,TouchableOpacity,Text,StyleSheet,ScrollView,ImageBackground,Image} from 'react-native'
import firebase from 'firebase'
import { Dropdown } from 'react-native-material-dropdown';
import {AdMobBanner,AdMobRewarded,AdMobInterstitial} from 'expo';

AdMobInterstitial.setAdUnitID('ca-app-pub-6789872334744911/8809598702')
AdMobInterstitial.setTestDeviceID("EMULATOR");
AdMobRewarded.setAdUnitID('ca-app-pub-6789872334744911/9854075308')
export default class Result extends React.Component{
    static navigationOptions = {
        title: 'ผลลัพธ์'
      };
    
    constructor(props){
        super(props)
        const {zodiac} = this.props.navigation.state.params
        this.state = {zodiac : zodiac,data:[],index:0,month:'',status:false,detail:''}
    }

    async componentWillReceiveProps(month){
        firebase.database().ref(`zodiac/${this.state.index}/${month}`).on('value',(snapshot)=>{
            this.setState({detail : snapshot.val(),status:true}) 
        })
       
    }

    loadAdd = async () => {
        await AdMobInterstitial.requestAdAsync();
        await AdMobInterstitial.showAdAsync();
    }

    loadData = async () =>{
        await AdMobRewarded.requestAdAsync();
        await AdMobRewarded.showAdAsync();
    }

    async componentWillMount(){
        await this.loadData()
        
        if(this.state.zodiac == 'ราศีเมษ'){
            this.setState({index : 0})
        }
        if(this.state.zodiac == 'ราศีพฤษภ'){
            this.setState({index : 1})
        }
        if(this.state.zodiac == 'ราศีมิถุน'){
            this.setState({index : 2})
        }
        if(this.state.zodiac == 'ราศีกรกฎ'){
            this.setState({index : 3})
        }
        if(this.state.zodiac == 'ราศีสิงห์'){
            this.setState({index : 4})
        }
        if(this.state.zodiac == 'ราศีกันย์'){
            this.setState({index : 5})
        }
        if(this.state.zodiac == 'ราศีตุลย์'){
            this.setState({index : 6})
        }
        if(this.state.zodiac == 'ราศีพิจิก'){
            this.setState({index : 7})
        }
        if(this.state.zodiac == 'ราศีธนู'){
            this.setState({index : 8})
        }
        if(this.state.zodiac == 'ราศีมังกร'){
            this.setState({index : 9})
        }
        if(this.state.zodiac == 'ราศีกุมภ์'){
            this.setState({index : 10})
        }
        if(this.state.zodiac == 'ราศีมีน'){
            this.setState({index : 11})
        }
        
        firebase.database().ref('zodiac/'+this.state.index).on('value',(snapshot)=>{
            this.setState({data : snapshot.val()})
        })
    }
    
    renderbutton(){
        if(this.state.month == '' ){
            return(<View style={styles.button}>
              <Text style={styles.text}>กรอกเดือนที่ต้องการดู</Text>
            </View>)
        }else{
          return(
              <View style={styles.button}>
              <TouchableOpacity onPress={()=>this.renderItem()}><Text style={styles.text}>เช็คดวง</Text></TouchableOpacity>
            </View>
            )
        }
    }

    renderItem(){
       var month_eng = ''
       if(this.state.month == 'มกราคม'){
           month_eng = 'Jan'
       }
       if(this.state.month == 'กุมภาพันธ์'){
        month_eng = 'Feb'
    }
    if(this.state.month == 'มีนาคม'){
        month_eng = 'Mar'
    }
    if(this.state.month == 'เมษายน'){
        month_eng = 'Apr'
    }
    if(this.state.month == 'พฤษภาคม'){
        month_eng = 'May'
    }
    if(this.state.month == 'มิถุนายน'){
        month_eng = 'June'
    }
    if(this.state.month == 'กรกฏาคม'){
        month_eng = 'July'
    }
    if(this.state.month == 'สิงหาคม'){
        month_eng = 'Aug'
    }
    if(this.state.month == 'กันยายน'){
        month_eng = 'Sept'
    }
    
    if(this.state.month == 'ตุลาคม'){
        month_eng = 'Oct'
    }
    if(this.state.month == 'พฤษจิกายน'){
        month_eng = 'Nov'
    }
    if(this.state.month == 'ธันวาคม'){
        month_eng = 'Dec'
    }

    this.componentWillReceiveProps(month_eng)    
    }

    renderdetail(){
        if(this.state.status){
            return(
       <View style ={styles.desc_container}>
                <Text style={{fontSize:18,color:'#f1e7fe',textAlign:'center',padding:5}}>{this.state.detail}</Text>
                </View>
       )
       }else{
            return(
                <Image style={{height:250}} source ={{uri : 'https://firebasestorage.googleapis.com/v0/b/myprx125.appspot.com/o/source.gif?alt=media&token=448d0a6d-3186-45f6-aec6-dca2168313b4'}}></Image>
            )
       }
    }

    render(){
        return(
            <ImageBackground style={{width: '100%', height: '100%'}} source ={{uri : 'https://i.pinimg.com/originals/f9/b3/4e/f9b34ed4dd3da69fa43a573c281d8f9e.jpg'}}>
           <ScrollView>
            <View>
            <View style={styles.container}>
               <Dropdown label='เดือน' data={month} labelFontSize = {20} baseColor = '#f1e7fe' textColor = '#f1e7fe'
               selectedItemColor = 'rgb(219, 44, 101)'
               onChangeText = {(text) => this.setState({month : text})}/>
                   {this.renderbutton()}
                </View>
                    {this.renderdetail()}
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
        height : 150,
        margin:10,
        marginTop:100,
        borderRadius:10,
        padding:5
    },
    button:{
        backgroundColor:'rgb(219, 44, 101)',
        height : 60,
        margin:10,
        marginTop:10,
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
    desc_container : {
        backgroundColor:'rgb(120, 70, 169)',
        margin:10,
        marginTop:20,
        borderRadius:10
    },
    bottomBanner: {
        position: "absolute",
        bottom: 0
      }
})