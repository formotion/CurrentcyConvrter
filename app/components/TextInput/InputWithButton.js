import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import color from 'color';

import styles from './style';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;
  const buttomBackgroundColorBase = styles.$buttomBackgroundColorBase;
  const buttomBackgroundColorModifier = styles.$buttomBackgroundColorModifier;

  const underlayColor = color(buttomBackgroundColorBase).darken(buttomBackgroundColorModifier);

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }
  return (
    <View style={containerStyles}>
      <TouchableHighlight
        underlayColor={underlayColor}
        style={styles.buttonContainer}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput underlineColorAndroid="transparent" style={styles.input} {...props} />
    </View>
  );
};
InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
};
export default InputWithButton;
