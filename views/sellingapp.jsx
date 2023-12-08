import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, Linking, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CarsComponent = () => {
  const [cars, setCars] = useState([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    // Use axios or fetch to get data from the server
    axios.get('https://my-api.com/get-cars')
      .then(response => {
        setCars(response.data.cars);
        setPages(response.data.pages);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>All Selling Cars</Text>
      <FlatList
        data={cars}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 20 }}>
            <Image source={{ uri: item.carimg }} style={{ width: '100%', height: 200 }} />
            <Text style={{ fontSize: 18 }}>Car's name: {item.carname}</Text>
            <Text style={{ fontSize: 18 }}>Car's Price: {item.carprice}</Text>
            <Button title="Call me" onPress={() => Linking.openURL(`tel:${item.contact}`)} />
          </View>
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        {[...Array(pages).keys()].map(i => (
          <TouchableOpacity key={i} onPress={() => console.log(`Navigate to page ${i}`)}>
            <View style={{ padding: 10, marginHorizontal: 5, backgroundColor: 'skyblue' }}>
              <Text>{i + 1}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CarsComponent;