import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import {Provider as AuthProvider} from "././src/context/AuthContext";
import {Provider as LocationProvider} from "././src/context/LocationContext";
import {Provider as TrackProvider} from "././src/context/TrackContext";
import {navigationRef} from './src/navigationRef'
import {FontAwesome} from '@expo/vector-icons'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer ref={navigationRef} >
    <Stack.Navigator>
    <Stack.Screen name="ResolveAuth" component={ResolveAuthScreen}  options={{ headerShown: false }} />
      <Stack.Screen name="Auth flow" component={LoginFlow}  options={{ headerShown: false }} />
      <Stack.Screen name="Main flow" component={MainFlow}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
  )

}

function LoginFlow() {
  return (
  
    <Stack.Navigator>
      <Stack.Screen
       name="Sign Up" 
       component={SignupScreen} 
       options={{ headerShown: false }}
    
        />
      <Stack.Screen name="Login" component={SigninScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>

  )
}

function MainFlow() {
  return (
  
    <Tab.Navigator>
      <Tab.Screen name="Track Flow" component={TrackFlow} 
        options={{ 
          tabBarIcon: () =>{return <FontAwesome name='plus' size={20}/>},
          headerShown: false
        }}
        
        />
      <Tab.Screen name="Create Track" component={TrackCreateScreen}   options={{ 
          tabBarIcon: () =>{return <FontAwesome name='th-list' size={20}/>},
          title: "Create Track"
        }}/>
      <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarIcon: () =>{return <FontAwesome name='gear' size={20}/>},
      }} />
    </Tab.Navigator>

  )
}

function TrackFlow() {
  return (
 
    <Stack.Navigator>
      <Stack.Screen name="Track List" component={TrackListScreen} options={{title: 'Track List'}}/>
      <Stack.Screen name="Track Detail" component={TrackDetailScreen} />
    </Stack.Navigator>

  )
 
}

export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )
}