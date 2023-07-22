import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Button = ({title, ...rest}) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 28,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34c6eb',
  },
});

export default Button;
