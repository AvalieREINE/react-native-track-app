//import '../_mockLocation';
import { StyleSheet, Text, View, SafeAreaView, Button , Linking, ScrollView, } from 'react-native'
import { useIsFocused } from '@react-navigation/native';
import React, { useContext,useCallback} from 'react'
import Map from '../components/Map'
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm';
 

const TrackCreateScreen = () => {
  const {addLocation, state: {recording}} = useContext(LocationContext)
  const isFocused = useIsFocused();
  const callback = useCallback( (location) => {
    addLocation(location,recording )
  }, [recording])
  
const [err] = useLocation(isFocused || recording,callback)


  return (
    <SafeAreaView  >
    <ScrollView>
      <Map />
     <Button title="Go to permission settings" onPress={() => { Linking.openURL('app-settings:') }} /> 
      {err ? <Text>Please enable location services</Text> : null}
     <TrackForm />
     </ScrollView>
    </SafeAreaView>
  )
}

export default TrackCreateScreen
