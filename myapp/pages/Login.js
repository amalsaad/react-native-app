import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';


import {Actions} from 'react-native-router-flux';

export default class Login extends Component<{}> {

	signup() {
		Actions.signup()
	}

	render() {
		return(
			<View style={styles.container}>
			
        <Image style={styles.logoImg} source={require('../img/React-logo.png')}/>
        <TextInput style={styles.inputBox}  placeholder={'Mobile'} underlineColorAndroid={'transparent'}/>
        <TextInput  style={styles.inputBox} placeholder={'Password'} underlineColorAndroid={'transparent'} secureTextEntry={true}/>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity >

        <TouchableOpacity>
          <Text>Need a help?</Text>
        </TouchableOpacity >

        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={this.signup}><Text> Signup !</Text></TouchableOpacity>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#fafafa',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  logoImg: {
    // width:100,
    // height:150,
    marginBottom: 20,
  },
   inputBox: {
    width:230,
    backgroundColor: '#e2dfdf',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal:10,
    fontSize:14
   },
   buttonText: {
    fontSize:14,
    textAlign: 'center',
    color: '#ffff'
      },
    button: {
    width:230,
    backgroundColor: '#f16f70',  
    borderRadius: 15,
    marginVertical: 6,
    paddingVertical: 16 
      }
});
