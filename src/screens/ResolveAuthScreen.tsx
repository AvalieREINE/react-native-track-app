import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useEffect} from 'react'
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = () => {
  const {tryLocalSignin} = useContext(AuthContext)

  useEffect(() => {
    tryLocalSignin();
  },[])
  return <Text>Loading...</Text>;
}

export default ResolveAuthScreen

const styles = StyleSheet.create({})