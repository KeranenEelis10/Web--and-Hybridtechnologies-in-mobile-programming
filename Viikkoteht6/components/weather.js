import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

const api = {
    url: process.env.EXPO_PUBLIC_API_URL,
    key: process.env.EXPO_PUBLIC_API_KEY,
    icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const url =
        api.url +
        'lat=' +
        props.latitude +
        '&lon=' +
        props.longitude +
        '&units=metric' +
        '&appid=' +
        process.env.OPENWEATHERMAP_API_KEY;
  
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setTemp(json.main.temp);
          setDescription(json.weather[0].description);
          setIcon(api.icons + json.weather[0].icon + '@2x.png');
        })
        .catch((error) => {
          setError("Error retrieving weather info");
          console.log(error);
        });
    }, [props.latitude, props.longitude]); // Added dependency array for useEffect
  
    return (
      <View>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <View>
            <Text>Weather Information</Text>
            <Text>Temperature: {temp}°C</Text>
            <Text>Description: {description}</Text>
            {icon ? (
            <Image
              source={{ uri: icon }}
              style={{ width: 50, height: 50 }}
            />
            ) : null}
          </View>
        )}
      </View>
    );
  }

  

