import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({children}) => {
  return (
    <View>
      <Text style={styles.spacer}>{children}</Text>
    </View>
  )
}

export default Spacer

const styles = StyleSheet.create({
  spacer: {
    margin:15
  }
})