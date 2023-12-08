import React from 'react';
import { Text, View } from 'react-native';

class MyComponent extends React.Component {
  render() {
    const { message, error } = this.props; 

    return (
      <View>
        <Text style={{fontSize: 32}}>{message}</Text>
        <Text style={{fontSize: 24}}>{error.status}</Text>
        <Text style={{fontSize: 16}}>{error.stack}</Text>
      </View>
    );
  }
}