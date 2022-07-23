import { StyleSheet,   View } from 'react-native'
import React, {useContext} from 'react'
import { Button,Text,Input } from "@rneui/base";
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const AccountScreen = () => {

  const  { signout } = useContext(AuthContext);
  return (
    <SafeAreaView>
   <View>
      <Button 
      title='Sign Out'
      buttonStyle={{
        backgroundColor: 'rgba(111, 202, 186, 1)',
        borderRadius: 5,
              }}  
        containerStyle={{
          marginLeft: 90,
          
          height: 50,
          width: 200,
          marginTop: 50
              }}
       onPress={signout} /> 
 </View>
    </SafeAreaView>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})