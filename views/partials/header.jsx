import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyComponent = ({ isLoggedInval }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Car Seller"
        onPress={() => navigation.navigate('CarSeller')}
      />
      <Button
        title="Buy/Sell"
        onPress={() => navigation.navigate('BuySell', { id: 0 })}
      />
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      {isLoggedInval && (
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Logout')}
        />
      )}
    </View>
  );
}

export default MyComponent;