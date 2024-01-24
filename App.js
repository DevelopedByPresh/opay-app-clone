import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding from './components/onBoarding';
import Home from './components/Home';
import TouchId from './components/TouchId';
import Dashboard from './components/Dashboard';
import Support from './components/Support';
import Balance from './components/Balance';
import Transfer from './components/Transfer';
import NewConversation from './components/NewConversation';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer show>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="OnBoarding" component={OnBoarding} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="TouchId" component={TouchId} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Support" component={Support} />
    <Stack.Screen name="Balance" component={Balance} />
    <Stack.Screen name="Transfer" component={Transfer} />
    <Stack.Screen name="NewConversation" component={NewConversation} />
  
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
