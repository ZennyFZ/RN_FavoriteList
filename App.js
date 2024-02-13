import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Homepage/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homepage' screenOptions={{headerShown: false}} >
        <Stack.Screen name="Homepage" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}