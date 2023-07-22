import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const Input = ({label,placeholder, ...rest}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} {...rest} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 20,
    color: '#fff',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Input;
