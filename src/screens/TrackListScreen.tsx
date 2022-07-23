import { StyleSheet,   View,  FlatList, TouchableOpacity} from 'react-native'
import React, {  useContext, useEffect} from 'react'
import { Button,Text,Input, ListItem } from "@rneui/base";
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({navigation}) => {
 
  const {fetchTracks, state} = useContext(TrackContext)

  
  useEffect(() => {
    const unsubscribe =  navigation.addListener('focus', () => {
      fetchTracks()   
    }) 
    return unsubscribe 
  }, [])
  return (
    <View>
      <FlatList 
      data={state}
      keyExtractor={item => item._id}
      renderItem={({item}) => {
        return <TouchableOpacity onPress={() => navigation.navigate('Track Detail', { _id: item._id }) }>
          <ListItem>
          <ListItem.Chevron/>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem>
        </TouchableOpacity>
      }}
      />
    </View>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})