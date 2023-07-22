import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import SelectionButton from '../components/SelectionButton';

const Welcome = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <Image
            style={styles.fireLogo}
            source={{
              uri: 'https://em-content.zobj.net/thumbs/120/apple/354/fire_1f525.png',
            }}
          />
          <Text style={styles.textHeader}>Welcome </Text>
        </View>
        <Image
          style={styles.questionLogo}
          source={{
            uri: 'https://www.iconsdb.com/icons/preview/white/question-mark-4-xxl.png',
          }}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyWelcome}>
          <Text style={styles.bodyText}>Welcome to </Text>
          <Text style={styles.companyText}>Influence.co!</Text>
          <Text style={styles.bodyText}>Please select your account type</Text>
        </View>
        <View style={styles.bodySelection}>
          <View>
            <SelectionButton text="I'm a brand" />
          </View>
          <View>
            <TouchableOpacity style={styles.bodyButton}>
              <Text style={styles.bodyText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.bodyText}>
          Don't know what account type to use?
        </Text>
        <Text style={[styles.bodyText, styles.greenText]}>
          Check out our post
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#2291EA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2291EA',
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  fireLogo: {
    width: 40,
    height: 40,
  },
  questionLogo: {
    width: 24,
    height: 24,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyWelcome: {
    flex: 2.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bodySelection: {
    flex: 5,
    marginTop: 40,
    justifyContent: 'space-between',
  },
  bodyText: {
    color: 'white',
    fontSize: 16,
  },
  companyText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 4,
  },
  bodyButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    width: 360,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  footer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenText: {
    color: '#68de88',
  },
});

export default Welcome;
