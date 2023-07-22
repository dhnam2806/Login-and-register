import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
            setEmail(text);
          }}
        />
        <Input
          label="Password"
          secureTextEntry={true}
          placeholder={'Enter your password'}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            alert('Forgot Password?');
          }}>
          <Text style={styles.miniText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          title="Login"
          onPress={() => {
            alert('email' + email + '  ' + 'password:' + password);
          }}
        />
        <TouchableOpacity>
          <Text style={styles.signUpText}>Don't have account? Sign Up</Text>
        </TouchableOpacity>
        <View style={{flex: 1}}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#34c6eb',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 160,
    height: 160,
  },
  body: {
    flex: 2,
    paddingHorizontal: 20,
  },
  miniText: {},
  signUpText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Login;
