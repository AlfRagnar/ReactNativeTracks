import React, { useContext } from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)
  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text style={styles.tracklist}>TrackListScreen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TrackDetail', { _id: item._id })}
            >
              <ListItem>
                <ListItem.Chevron />
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem>
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  tracklist: {
    fontSize: 48
  }
})

export default TrackListScreen
