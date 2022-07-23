import { StyleSheet, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import { Text } from "@rneui/base";
import Spacer from '../components/Spacer';
import {Context as AuthContext} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({text, routeName}) => {
  const navigation = useNavigation();
  return (
  <TouchableOpacity onPress={() =>navigation.navigate(routeName)}>
  <Spacer>
  <Text style={styles.link}>{text}</Text>
  </Spacer>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  }
})

export default NavLink;