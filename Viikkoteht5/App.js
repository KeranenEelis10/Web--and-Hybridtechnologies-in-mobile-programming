import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location'
//import MapViewComponent from './components/mapView';

export default function App() {

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    
    const getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    };
  
    getLocationAsync();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={location}>
        <Marker coordinate={location} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});