import { StyleSheet, Text, View, TextInput } from 'react-native'
import React , {useContext }from 'react'
import { Button, Input} from '@rneui/base'
import Spacer from './Spacer'
import {Context as LocationContext} from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
  const {startRecording, stopRecording, changeName, state: {name,recording, locations}} = useContext(LocationContext)
  const [saveTrack] = useSaveTrack()
  
  return (
    <View style={{alignItems: 'center' , marginTop: 20}}>
    <Input  placeholder='Enter name' onChangeText={changeName} value={name} />
    {recording ?<Button 
      title="Stop  "
      buttonStyle={styles.btn}  
              containerStyle={styles.btnContainer}
        onPress={stopRecording}
        /> :  <Button 
        title="Start Recording"
        buttonStyle={styles.btn}  
          containerStyle={styles.btnContainer}
          onPress={startRecording}
          />  }
    {!recording && locations.length > 0 ? <Button title='Save Recording' onPress={saveTrack}/> : null}
    </View>
  )
}

export default TrackForm

const styles = StyleSheet.create({
  btnContainer: {
    marginHorizontal: 50,
    justifyContent: 'center',
    height: 50,
    width: 200,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: 'rgba(111, 202, 186, 1)',
    borderRadius: 5,
  }
})