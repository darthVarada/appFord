
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';
import {createStackNavigator,createAppContainer} from "react-navigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "react-native-elements/dist/icons/Icon";
import { render } from "react-dom";


state = {
    login: ''
}

const Separator = () => (
    <View style={Styles.separator} />
  );

export default function login(props){   
    return (
        <View style={styles.container}>

      <Image source={require(../assets/FordPassImg.png)} style={styles.ImageFord}/>
      <View style={styles.textView}>
      <Text style={styles.textStyles}>
        para entrar, utilize o seu usuario (e-mail) cadastrado
        no fordPass ou agenda Ford.
      </Text>
      </View>
      <View >
        <TextInput style={styles.textInputs} placeholder="email" />

          <Separator/>

          <TextInput  placeholder="senha"/>
          
          <Separator/>

        </View>
        <CheckBox
         // title='Click Here'
         // dando erro no "this"
         // checked={this.state.checked}
       />
        <Button
        title="login"
        color="#a0a0a0"
        
        onPress={() => Alert.alert('login to the other screen')}
      />

      <Separator/>
      
      <View>
      <Button
        title="CRIAR CONTA"
        color="#a0a0a0"
        
        onPress={() => Alert.alert('login to the other screen')}
      />
      </View>

      <StatusBar style="auto" />
    </View>


);
        
}