import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Backdrop = ({onPress, zIndex}) => (
  <TouchableWithoutFeedback onPress={onPress} style={zIndex ? {zIndex} : {}}>
    <View style={styles.backdrop} />
  </TouchableWithoutFeedback>
);

Backdrop.propTypes = {
  onPress: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  backdrop: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Backdrop;
