// SearchBar.js
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const SearchBar = ({ data, onSearch }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const newData = data.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(newData);
    onSearch(newData);
  };

  return (
    // <View style={{ backgroundColor: 'black', padding: 10, borderRadius: 10, paddingVertical: 30 }}>
    //   <TextInput
    //     style={{
    //       height: 40,
    //       borderColor: 'white',
    //       borderWidth: 1,
    //       marginBottom: 10,
    //       paddingLeft: 10,
    //       borderRadius: 20,
    //       color: 'white',
    //       backgroundColor: 'black'
    //     }}
    //     placeholder="Search..."
    //     placeholderTextColor="white"
    //     onChangeText={text => setQuery(text)}
    //   />
    //   <Button title="Search" onPress={handleSearch} />
    //   <FlatList
    //     data={filteredData}
    //     keyExtractor={(item, index) => index.toString()}
    //     renderItem={({ item }) => <Text style={{ color: 'white' }}>{item}</Text>}
    //   />
    // </View>
  );
};

export default SearchBar;
