import { StyleSheet  } from 'react-native'
import React, {useState, useContext} from 'react'
import { Button,Text,Input } from "@rneui/base";
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';

const AuthForm = ({headerText, errMsg, onSubmit, buttonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
    <Spacer>
    <Text h3>{headerText}</Text>
    </Spacer>
     <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
     <Spacer children={undefined} />
     <Input secureTextEntry label="Password" value={password} onChangeText={setPassword}  autoCapitalize="none" autoCorrect={false} />
     { errMsg ? <Text style={styles.errMsg}>{errMsg}</Text> : null}
     <Spacer children={undefined} />
     <Button type="outline"  title={buttonText} onPress={() =>{
      onSubmit({email,password})
      setEmail('')
      setPassword('')
      }}/>
     </>
  )
}

const styles = StyleSheet.create({
  errMsg: {
    fontSize:16,
    color: 'red',
    marginLeft:10,
    marginTop: 10
  },
})

export default AuthForm;