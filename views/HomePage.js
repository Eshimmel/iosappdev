import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
export function HomePage({ route, navigation }) {
  const { name } = route.params;

  return (
    <View>
    <Text> Hello {route.params.name} </Text>
    </View>
  );

}
