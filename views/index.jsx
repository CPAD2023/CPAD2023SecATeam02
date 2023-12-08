import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sell/Buy your car <Text style={styles.span}>at really great price !!</Text></Text>
      <View style={styles.form}>
        <Text style={styles.h2}>Login Here</Text>
        <TextInput placeholder="username" />
        <TextInput placeholder="password" secureTextEntry={true} />
        <Button title="Submit" onPress={() => {}} />
      </View>
      <View style={styles.form}>
        <Text style={styles.h2}>Register Here</Text>
        <TextInput placeholder="name" />
        <TextInput placeholder="email" />
        <TextInput placeholder="username" />
        <TextInput placeholder="password" secureTextEntry={true} />
        <Button title="Submit" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
  },
  span: {
    fontWeight: 'bold',
  },
  form: {
    marginTop: 20,
  },
  h2: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default App;