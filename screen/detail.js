import React from 'react'
import {ImageBackground,StyleSheet} from 'react-native'
import firebase from 'firebase'
import Props from '../components/DetailScreen'



export default class Detail extends React.Component{
    static navigationOptions = {
        title: 'ไพ่ของคุณคือ',
      };
    
    constructor(props){
        super(props)
        const {number} = this.props.navigation.state.params
        this.state = {number : number,data:[]}
    }

    componentWillMount(){
        firebase.database().ref('mydata/'+this.state.number).on('value',(snapshot)=>{
            this.setState({data : snapshot.val()})
           alert('คุณสามารถกดที่ไพ่จะแสดงคำอธิบาย')
        })
    }
    
    render(){
        return(
            <ImageBackground source={{uri : 'http://www.52dazhew.com/data/out/244/587630224-white-wallpaper-background.jpg'}}
          style={{width: '100%', height: '100%'}}>
            <Props name = {this.state.data.name} img = {this.state.data.img} 
            desc = {this.state.data.desc} keyword = {this.state.data.keyword}
            love = {this.state.data.love}/>
            </ImageBackground>
        )
    }
}
