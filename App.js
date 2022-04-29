import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from './views/HomePage';
import { LoginView } from './views/LoginView';
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
    <Stack.Screen
    name="Login View"
    component={LoginView}
    options={{ title: "Login page" }}
    />
    <Stack.Screen
    name="Home Page"
    component={HomePage}
    options={{ title: "Home Page" }}
    />
    </Stack.Navigator>

    </NavigationContainer>
  );
}
