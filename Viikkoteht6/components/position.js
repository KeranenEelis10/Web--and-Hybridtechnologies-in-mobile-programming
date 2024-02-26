import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Location from 'expo-location';
import Weather from './weather'; // Import Weather component

export default function Position()  {
  //const [location, setLocation] = useState(null);
  //const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [message, setMessage] = useState('Retrieving location...')
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status)
      try {
        if (status !== 'granted') {
          setMessage("Location not permitted");
        }
        else{
            const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            setMessage('Location retrieced')
        }
      } catch (error) {
        setMessage("Error retrieving location")
        console.log(error)
      }
        setIsloading(false);
    })()
  }, [])


  return (
    <React.Fragment>
      {isLoading ? (
        <Text>Loading position...</Text>
      ) : (
        <React.Fragment>
          <Text>Latitude: {latitude}</Text>
          <Text>Longitude: {longitude}</Text>
          {/* Render Weather component with latitude and longitude props */}
          <Weather
            latitude={latitude}
            longitude={longitude}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
