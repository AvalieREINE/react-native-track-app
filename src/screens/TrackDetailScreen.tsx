import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import {Context as TrackContext} from '../context/TrackContext'
import MapView, {Polyline} from 'react-native-maps'

const TrackDetailScreen = ({route}) => {
  const id = route.params._id
  const {state} = useContext(TrackContext)

  const track = state.find(t => t._id === id)
  const initialCoords = track.locations[0].coords  
  return (
    <View>
      <Text>{track.name}</Text>
      <MapView
       
      style={styles.map}
      initialRegion={{
        longitudeDelta:0.001,
        latitudeDelta:0.001,
        longitude: initialCoords.longitude ? initialCoords.longitude : 0,
        latitude: initialCoords.latitude ? initialCoords.latitude : 0
      }}
      >
        <Polyline  coordinates={track.locations.map( loc=> loc.coords )} />
      </MapView>
    </View>
  )
}

export default TrackDetailScreen

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})