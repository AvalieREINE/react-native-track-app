import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, {useContext} from 'react'
import {Context as LocationContext } from '../context/LocationContext'
import MapView, {Polyline, Circle} from 'react-native-maps'

const Map = () => {
  const {state: {currentLocation, locations}} = useContext(LocationContext)
  if (!currentLocation) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <View>
      <MapView
       style={styles.map}
       initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
       }}
  
        >
          <Circle 
          center={currentLocation.coords}
          radius={10}
          strokeColor='rgba(158,158,255,1.0)'
          fillColor='rgba(158,158,255, 0.3)'
          />
          <Polyline coordinates={locations.map(loc => loc.coords)}/>
        </MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
})