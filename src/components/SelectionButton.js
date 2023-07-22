import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FonAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SelectionButton = ({text}) => {
  const [isSelect, setIsSelect] = useState(false);
  const {bodyButton, bodyText, buttonIcon} = styles;

  const handlePress = () => {
    setIsSelect(!isSelect);
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        bodyButton,
        {backgroundColor: isSelect ? 'white' : 'transparent'},
      ]}>
      {isSelect == true && (
        <FonAwesomeIcon name="check" size={20} style={buttonIcon} />
      )}
      <Text
        style={[
          bodyText,
          {color: isSelect ? '#2291EA' : 'white', fontWeight: isSelect ? 'bold' : 'normal'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bodyButton: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    width: 360,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  bodyText: {
    fontSize: 16,
  },
  buttonIcon: {
    position: 'absolute',
    left: 16,
    color: '#3cfa4f',
  },
});

export default SelectionButton;
