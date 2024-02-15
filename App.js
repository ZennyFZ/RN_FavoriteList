import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Homepage/HomeScreen';
import DetailScreen from './screens/Detail/DetailScreen';
import FavoriteScreen from './screens/Favorite/FavoriteScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      switch (route.name) {
        case 'Home':
          iconName = focused ? 'home' : 'home-outline';
          break;
        case 'Favorite':
          iconName = focused ? 'heart' : 'heart-outline';
          break;
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#92B4D3',
    tabBarInactiveTintColor: 'gray',
  })

  return (
    <NavigationContainer style={{backgroundColor: "#9ca3af40"}}>
      <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}