import React from 'react';
import firebase from 'firebase'
import { Text, View, StyleSheet,TouchableOpacity,TextInput,KeyboardAvoidingView,ToastAndroid} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Header} from 'react-native-elements';
import db from'../config.js';


export default class WriteStoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state={
      author:'',
      storyText:'',
      title:'',
      }
      }
      
submitStory=()=>{
  db.collection('bed-story').add({
    author:this.state.author,
    storyText:this.state.storyText,
    title:this.state.title,
  })
  this.setState({
      author:'',
      storyText:'',
      title:'',
  })
 ToastAndroid.show('YOUR STORY HAS BEEN SUBMITED',ToastAndroid.SHORT)
}

render(){
  return(
         <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            
             <Header
             backgroundColor={'pink'}
             centerComponent={{
             style:{COLOR:'White', fontSize:20},
             text:'BED TIME STORIES',
             }}/>

          <TextInput 
              style={styles.title}
              onChangeText={(text)=>{
                this.setState({
                  title:text
                })}}
              placeholder="STORY TITLE"
              value={this.state.title}/>
            <TextInput 
              style={styles.author}
              onChangeText={(text)=>{
                this.setState({
                  author:text
                })}}
              placeholder="AUTHOR"
              value={this.state.author}/>

                <TextInput 
              style={styles.storyText}
              onChangeText={(text)=>{
                this.setState({
                  storyText:text
                })}}
              placeholder="WRITE YOUR STORY"
              value={this.state.storyText}
              multiline={true}
              />
         
      <TouchableOpacity onPress={this.submitStory} style={styles.submitButton}>
      <Text style={styles.submitButtonText}>SUBMIT</Text>
      </TouchableOpacity >
    </KeyboardAvoidingView>
      )}}

const styles=StyleSheet.create({
  container:{
backgroundColor:'#fff',
flex:1,
  },
author:{
margin:10,
height:40,
borderWidth:2,
},
title:{
height:40,
borderWidth:2,
margin:10,
marginTop:40
},
storyText:{
margin:10,
height:250,
borderWidth:2,
},
submitButton:{
justifyContent:'center',
width:100,
height:40,
backgroundColor:'pink',
alignSelf:'center',
},
submitButtonText:{
padding:10,
textAlign:'center',
color:'white',
alignSelf:'center',
fontSize:20,
fontWeight:'bold',
}})