import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import MapView, { Polyline, PROVIDER_GOOGLE } from 'react-native-maps'
import { Context as TrackContext } from '../context/TrackContext'

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext)
  const _id = navigation.getParam('_id')
  const track = state.find((t) => t._id === _id)
  const initialCoords = track.locations[0].coords
  return (
    <>
      <Text style={styles.trackdetail}>{track.name}</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        mapType='satellite'
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords
        }}
        style={styles.map}
      >
        <Polyline
          strokeColor='yellow'
          coordinates={track.locations.map((loc) => loc.coords)}
        />
      </MapView>
    </>
  )
}

const styles = StyleSheet.create({
  trackdetail: {
    fontSize: 48
  },
  map: {
    height: 300
  }
})

export default TrackDetailScreen
