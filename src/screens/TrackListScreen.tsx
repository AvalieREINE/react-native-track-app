import { StyleSheet,   View,  FlatList, TouchableOpacity} from 'react-native'
import React, {  useContext, useEffect} from 'react'
import { Button,Text,Input, ListItem } from "@rneui/base";
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({navigation}) => {
 
  const {fetchTracks, state} = useContext(TrackContext)

  const renderItem = ({item}) => 
   (
<TouchableOpacity key={item._id} onPress={() => navigation.navigate('Track Detail', { _id: item._id }) }>
          <ListItem >
          <ListItem.Chevron/>
            <ListItem.Title>{item.name}</ListItem.Title>
          </ListItem>
        </TouchableOpacity>
    )

  useEffect(() => {
    const unsubscribe =  navigation.addListener('focus', () => {
      fetchTracks()   
    }) 
    return unsubscribe 
  }, [])
console.log(state.length, 'length');

  if (state.length === 0) return null;
  return (
    <View>
      <FlatList 
      data={state}
      maxToRenderPerBatch={10}
      initialNumToRender={7}
      keyExtractor={(item, index) => {
        return  index.toString()
      }}
      renderItem={renderItem}
      />
    </View>
  )
}

export default TrackListScreen

const styles = StyleSheet.create({})