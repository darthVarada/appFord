import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, Button, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Separator = () => (
  <View style={styles.separator} />
);

export default function App() {
  
  return (
    <View style={styles.container}>

      <Image source={require('./assets/FordPassImg.png')} style={styles.ImageFord}/>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    alignItems: 'center',

  },
  textStyles: {
    color: "white",
    paddingHorizontal: 20
    
  },
  ImageFord: {
    marginTop: 40,
    marginBottom: 90,
    paddingTop: 50,
    width: 200,
    height: 60,

  },
  textInputs:{
    left:5,
  },
  
  separator: {
    marginVertical: 4,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingtop: 20,
  },
  textView:{
    marginBottom: 40,
  },
});
