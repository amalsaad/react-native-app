import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }

	render() {
		return(
			<View style={styles.container}>
			
       
        <TextInput style={styles.inputBox}  placeholder={'Name'} underlineColorAndroid={'transparent'}/>
        <TextInput  style={styles.inputBox} placeholder={'Mobile'} underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.inputBox}  placeholder={'Email'} underlineColorAndroid={'transparent'}/>
        <TextInput  style={styles.inputBox} placeholder={'City'} underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.inputBox}  placeholder={'Password'} underlineColorAndroid={'transparent'}  secureTextEntry={true}/>
        <TextInput  style={styles.inputBox} placeholder={'Re-enter password'} underlineColorAndroid={'transparent'} secureTextEntry={true}/>

        <Text style={styles.buttonText}>By clicking on Register Iagree to terms and condition</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity >

        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={this.goBack}><Text> Signin !</Text></TouchableOpacity>
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
