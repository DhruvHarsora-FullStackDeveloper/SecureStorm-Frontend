//import liraries
import React from 'react';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../theme';
import styles from './styles';

// create a component
const CustomInput = ({
  label,
  value,
  onChangeText,
  customStyle,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'none',
  maxLength,
}) => {
  return (
    <TextInput
      outlineColor={Colors.themeColor}
      label={label}
      activeOutlineColor={Colors.themeColor}
      mode="outlined"
      style={{ ...styles.textInput, ...customStyle }}
      onChangeText={onChangeText}
      value={value}
      autoCapitalize={autoCapitalize}
      autoCorrect={false}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      maxLength={maxLength}
    />
  );
};

// define your styles

//make this component available to the app
export default CustomInput;
