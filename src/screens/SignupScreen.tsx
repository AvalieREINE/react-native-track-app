import { StyleSheet,  View  } from 'react-native'
import React, {  useContext} from 'react'
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
const SignupScreen = ({navigation}) => {
  const {state, signup,clearErrMsg  } = useContext(AuthContext);

  // useEffect(() => {
  //   tryLocalSignin()
  //   const unsubscribe =  navigation.addListener('focus', () => {
  //     clearErrMsg()
    
  //   })
  //   return unsubscribe 

  // }, [])

  return (
    <View style={styles.container}>
        <AuthForm 
        headerText='Sign Up For Tracker'
        errMsg={state.errMsg}
        onSubmit={signup}
        buttonText='Sign Up'
        />
       <NavLink routeName='Login' text='Already have an account? Sign in instead'/>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
   
    padding: 5,
    marginBottom: 200
  },
 
  
})