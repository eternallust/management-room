import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView,Image,TouchableOpacity,Dimensions,AsyncStorage } from 'react-native';
import {  
    Item, 
    Input,
   } from 'native-base';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <SafeAreaView>
        <View style={styles.container}>
  
          <View style={[styles.textInfo, styles.textInfoTop]}>
            <Text style={styles.title}>Sign Up</Text>
            <Text>Fill all form to get access to app</Text>
            
          </View>
          <View style={styles.form}>
            <Item regular style={styles.formItem}>
              <Input
                value={this.state.inputUsername}
                onChangeText={(text) => this.setState({ inputUsername: text })}
                autoCapitalize='none'
                keyboardType='email-address'
                placeholder='Input your email' />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                value={this.state.inputPassword}
                onChangeText={(text) => this.setState({ inputPassword: text })}
                secureTextEntry={true}
                keyboardType='default'
                placeholder='Input your password' />
            </Item>
            <Item regular style={styles.formItem}>
              <Input
                value={this.state.inputPassword}
                onChangeText={(text) => this.setState({ inputPassword: text })}
                secureTextEntry={true}
                keyboardType='default'
                placeholder='Confirm your password' />
            </Item>
            <TouchableOpacity style={{padding:20,backgroundColor:'#1B9CFC',borderRadius:10}} onPress={this.register}>
              <Text style={{alignSelf:'center',fontWeight:'bold', color:'white'}}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView >
    );
  }
}
const styles = StyleSheet.create({
    container: {
      // flex: 1,
      width: Dimensions.get('window').width,
      paddingHorizontal: 20
    },
    textInfo: {
      alignItems: 'center',
      padding: 20
    },
    textInfoTop: {
      marginTop: 20,
      marginBottom: 30
    },
    title: {
      fontSize: 50
    },
    subTitle: {
      fontWeight:'bold',
      fontSize: 24,
      marginTop: 10
    },
    formItem: {
      borderRadius:5,
      marginBottom: 20
    },
    txtLink: {
      color: 'blue'
    }
  });