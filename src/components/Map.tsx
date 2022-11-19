import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import {Context as LocationContext } from '../context/LocationContext'
import MapView, {Polyline, Circle} from 'react-native-maps'
import * as ScreenOrientation from 'expo-screen-orientation';

const Map = () => {
  const {state: {currentLocation, locations}} = useContext(LocationContext)

  const [orientation, setOrientation] = useState(ScreenOrientation.Orientation.PORTRAIT_UP);

useEffect(()=>{
    // set initial orientation
    ScreenOrientation.getOrientationAsync()
    .then((info) =>{
       setOrientation(info);
    });

    // subscribe to future changes
    const subscription = ScreenOrientation.addOrientationChangeListener((evt)=>{
      setOrientation(evt.orientationInfo.orientation);
      
    });

    // return a clean up function to unsubscribe from notifications
    return ()=>{
      ScreenOrientation.removeOrientationChangeListener(subscription);
    }
  }, []);
  if (!currentLocation) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <View >
      <MapView
       style={{height: orientation === 4 || orientation === 3 ? 220 : 300}}
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
