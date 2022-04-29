import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
export function LoginView({ navigation }) {
  const [username, setUsername] = useState('');
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
      <View>
        <TextInput
          placeholder="password"
          secureTextEntry
        />
      </View>
      <Button
      title="Sign In"
      onPress={() =>
        navigation.navigate('Home Page', {name: username})
      }/>
      <Button title="Sign Up" />
    </View>
  );
}
