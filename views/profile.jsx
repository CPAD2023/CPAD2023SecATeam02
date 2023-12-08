import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ProfileScreen = () => {
  const [foundUser, setFoundUser] = useState({});
  const [carData, setCarData] = useState([]);

  const changeImage = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // Logic to upload the image to your server
        console.log('Image path: ', response.path);
      }
    });
  };

  useEffect(() => {
    // logic to fetch user data and set in foundUser state
    // logic to fetch car data and set in carData state
  }, []);

  return (
    <View>
      <View>
        <Image source={{ uri: foundUser.profileImage }} style={{ width: 50, height: 50 }} />
        <Text>{foundUser.name}</Text>
        <Button title="Change Image" onPress={changeImage} />
      </View>
      <View>
        <Text>Make new car selling listing.</Text>
        {/* Your form to post a new car */}
      </View>
      <View>
        <Text>Your Previous Entries</Text>
        {carData.map((car) => (
          <View key={car.id}>
            <Image source={{ uri: car.carimg }} style={{ width: 50, height: 50 }} />
            <Text>Car's name: {car.carname}</Text>
            <Text>Car's Price: {car.carprice}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${car.contact}`)}>
              <Text>Call me!</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProfileScreen;