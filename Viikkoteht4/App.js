import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Search from './components/search';

const DATA = [
  { id: 1, fName: 'Eelis', lName: 'Keranen' },
  { id: 2, fName: 'Saana', lName: 'Maaninka' },
  { id: 3, fName: 'Poika', lName: 'Maaninka' },
];


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA); 
  }, []);

  const executeSearch = (searchPhrase) => {
    const filteredData = DATA.filter(person =>
      person.lName.toLowerCase().startsWith(searchPhrase.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <View style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text>{`${item.fName} ${item.lName}`}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },
});

export default App;
