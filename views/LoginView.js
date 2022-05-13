import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import JSONStore from '@react-native-ibm-mobilefirst-jsonstore';
export function LoginView({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [creds, setCreds] = useState({name:'', pass:''});
  const saveName = async () => {
  try {
    var collection = new JSONStoreCollection('users');
    WLJSONStore.openCollections(['users'])
    collection.addData(username)
  } catch (err) {
    alert(err)
}
    navigation.navigate('Home Page', {name: username, pass: password})
  }
  return (
    <View>
      <Text>Sign Up or Sign In:</Text>
      <View>
        <TextInput
          placeholder="Username"
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
