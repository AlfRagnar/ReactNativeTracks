import * as Location from 'expo-location'

const tenMetersWithDegrees = 0.0001
const getLocation = (increment) => {
  return {
    timestamp: 100000,
    coords: {
      altitudeAccuracy: 5,
      altitude: 66.9000015258789,
      heading: 308.9818420410156,
      latitude: 69.3256132 + increment * tenMetersWithDegrees,
      speed: 0.00009284927364205942,
      longitude: 18.7794505 + increment * tenMetersWithDegrees,
      accuracy: 180
    }
  }
}

let counter = 0

setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  })
  counter++
}, 1000)
