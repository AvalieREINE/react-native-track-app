import { StyleSheet,  View  } from 'react-native'
import React, {  useContext, useEffect} from 'react'
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
const SigninScreen = ({navigation}) => {
    const {state, signin, clearErrMsg} = useContext(AuthContext);

    useEffect(() => {
      const unsubscribe =  navigation.addListener('focus', () => {
        clearErrMsg()
        
      }) 
      return unsubscribe 
  
    }, [])
  return (
    <View style={styles.container}>
        <AuthForm 
        headerText='Sign In to Your Account'
        errMsg={state.errMsg}
        onSubmit={signin}
        buttonText='Sign In'
        />
       <NavLink routeName='Sign Up' text='Do not have an account? Sign up instead'/>
    </View>
  )
}

export default SigninScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
   
    padding: 5,
    marginBottom: 200
  },
 
})