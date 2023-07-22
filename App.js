import React from 'react';
import Welcome from './src/screens/Welcome';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <Welcome />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    // backgroundColor: 'black',
  },
});

export default App;
