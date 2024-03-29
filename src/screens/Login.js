import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import isValidate from '../components/Validation';

const Login = () => {
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
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Already have account?</Text>
        <Image
          style={styles.logo}
          source={require('../assets/pngwing.com.png')}
        />
      </View>
      <View style={styles.body}>
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
          title="Login"
          onPress={() => {
            alert('email' + email + '  ' + 'password:' + password);
          }}
        />
        <TouchableOpacity>
          <Text style={styles.signUpText}>Don't have account? Register Now</Text>
        </TouchableOpacity>
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#34c6eb',
    paddingHorizontal: 20,


  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',


  },
  headerText: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 180,
    height: 180,
  },
  body: {
    flex: 2,
    justifyContent: 'center',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    flex: 1,
  },
});

export default Login;
