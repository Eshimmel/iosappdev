import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
export function LoginView({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [creds, setCreds] = useState({name:'', pass:''});
  useEffect(() => {
  const firstLoad = async () => {
  try {
  const savedName = await AsyncStorage.getItem("@name");
  setUsername(savedName);
  } catch (err) {
  console.log(err);
  }
  };
  firstLoad();
  }, []);
  const saveName = async () => {
  try {
  await AsyncStorage.setItem("@name", username);
  alert(username)
  } catch (err) {
  console.log(err);
  }
    navigation.navigate('Home Page', {name: username, pass: password})
  }
  return (
    <View>
      <Text>Sign Up or Sign In:</Text>
      <View>
        <TextInput
          placeholder={name}
          autoCapitalize="none"
          onChangeText={newUsername => setUsername(newUsername)}
          defaultValue={username}
        />
      </View>
      <Button
      title="Sign In"
      onPress={saveName}/>
    </View>
  );
}
