import React from 'react';
import { TextInput } from 'react-native';

const Search = ({ executeSearch }) => {
  return (
    <TextInput
      placeholder="Search..."
      onSubmitEditing={({ nativeEvent }) => executeSearch(nativeEvent.text)}
      returnKeyType="search"
    />
  );
};

export default Search;