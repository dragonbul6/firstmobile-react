import React from 'react'
import {View,Text,Image,StyleSheet,ScrollView,TouchableOpacity,ImageBackground} from 'react-native'
import {AdMobInterstitial} from 'expo';


AdMobInterstitial.setAdUnitID('ca-app-pub-6789872334744911/8809598702');
AdMobInterstitial.setTestDeviceID("EMULATOR");
export default class Props extends React.Component{
  
  _openInterstitial = async () => {
    await AdMobInterstitial.requestAdAsync();
    await AdMobInterstitial.showAdAsync();
    
  };


    render(){
        return(
          <ImageBackground style={{width: '100%', height: '100%'}} source ={{uri : 'https://cdn.pixabay.com/photo/2019/01/02/03/58/background-3907970_960_720.jpg'}}>
           <ScrollView>
            <View>
            <View style ={{marginTop:10,marginBottom:10,borderRadius:100,backgroundColor:'rgb(120, 70, 169)',margin:10, marginTop:5 ,}}>
                <Text style={Style.Header_font}>{this.props.name}</Text>
            </View>
            <View style={Style.Image_container}>
               <TouchableOpacity onPress={this._openInterstitial} containerViewStyle={Style.interstitialBanner}>
                 <Image style={Style.Image_Style} source = {{uri : this.props.img}}></Image>
                 </TouchableOpacity>
            </View>
                <View style={Style.Keyword_container}>
                    <Text style={{margin:20,fontWeight:'bold',fontSize:25,color:'#f1e7fe',textAlign:'center'}}>{this.props.keyword}</Text>
                </View>
                <View style={{ backgroundColor:'rgb(120, 70, 169)',margin:10,marginTop:5,borderRadius:10}}><Text style={{fontSize:20,fontWeight:'bold',color:'#f1e7fe',padding:10,textAlign:'center'}}>ความหมายในเรื่องความรัก</Text></View>
                <View style={Style.Love_container}>
                    <Text style={{textAlign:'center',padding:5,fontSize:18,fontWeight:'bold',color:'#f1e7fe'}}>{this.props.love}</Text>         
                </View>
            </View>
            </ScrollView>
            
            </ImageBackground>
        )
    }
}

const Style = StyleSheet.create({
    Header_font : {
        fontSize : 30,
        fontWeight : 'bold',
        fontStyle:'italic',
        color:'#f1e7fe',
        textAlign:'center'
        
    },
    Image_container : {
        height : 573,
        width: 320,
        borderWidth:1,
        margin:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Image_Style:{
        height : 573,
        width : 320,
  
    },
    Desc_container:{
      backgroundColor:'rgb(120, 70, 169)',
      margin:10,
      marginTop:5 
        
    },
    Keyword_container :{
      backgroundColor:'rgb(120, 70, 169)',
      margin:10,
      marginTop:5,
      borderRadius:50
        
    },
    Love_container :{
      backgroundColor:'rgb(120, 70, 169)',
      margin:10,
      marginTop:5 ,
      borderRadius:10
    },
      bottomBanner: {
        position: "absolute",
        bottom: 0
      },
      interstitialBanner: {
        width: "100%",
        marginLeft: 0
      },


    
})