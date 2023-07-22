import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import isValidate from '../components/Validation';

const Register = () => {
  const [name, setName] = useState();
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidateOke = () => {
    if (
      isValidate(email, {isRequired: true, isEmail: true}) == true &&
      isValidate(password, {isRequired: true, minLength: 6}) == true
    ) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Here your first step with us!</Text>
        <Image
          style={styles.logo}
          source={require('../assets/pngwing.com.png')}
        />
      </View>
      <View style={styles.body}>
        <Input
          label="Name"
          placeholder={'Enter your name'}
          onChangeText={text => {
            setNameError(
              isValidate(text, {isRequired: true, minLength: 2}) == true
                ? ''
                : 'Name cannot be empty',
            );
            setName(text);
          }}
        />
        <Text style={{color: 'red', fontSize: 12}}>{nameError}</Text>
        <Input
          label="Email"
          placeholder={'example@gmail.com'}
          onChangeText={text => {
            setEmailError(
              isValidate(text, {isRequired: true, isEmail: true}) == true
                ? ''
                : 'Email is not valid',
            );
            setEmail(text);
          }}
        />
        <Text style={{color: 'red', fontSize: 12}}>{emailError}</Text>
        <Input
          label="Password"
          secureTextEntry={true}
          placeholder={'Enter your password'}
          onChangeText={text => {
            setPasswordError(
              isValidate(text, {isRequired: true, minLength: 6}) == true
                ? ''
                : 'Password must be at least 6 characters',
            );
            setPassword(text);
          }}
        />
        <Text style={{color: 'red', fontSize: 12}}>{passwordError}</Text>
        <TouchableOpacity
          onPress={() => {
            alert('Forgot Password?');
          }}>
          <Text style={styles.miniText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          disabled={!isValidateOke()}
          title="Register"
          onPress={() => {
            alert('name' + name + 'email' + email + '  ' + 'password:' + password);
          }}
        />
      </View>
      <View style={styles.footer}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 28}}>
          <View style={{width: '30%', height: 1, backgroundColor: 'black'}} />
          <Text style={{flex: 1, textAlign: 'center', color: 'black'}}>
            Use other method?{' '}
          </Text>
          <View style={{width: '30%', height: 1, backgroundColor: 'black'}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Icon
            name="facebook-square"
            size={36}
            color={'#125db3'}
            style={{margin: 24}}
          />
          <Icon
            name="google"
            size={36}
            color={'#e84e3a'}
            style={{margin: 24}}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#34c6eb',
  },
  logo: {
    width: 180,
    height: 180,
  },
  body: {
    flex: 2,
    marginTop: 8,
    backgroundColor: '#34c6eb',
    borderRadius: 25,
    padding: 16,
    marginHorizontal: 12,
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
  },
});

export default Register;
