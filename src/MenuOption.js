import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { debug } from './logger';

export default class MenuOption extends Component {

  _onSelect() {
    const { value, onSelect } = this.props;
    const shouldClose = onSelect(value) !== false;
    debug('select option', value, shouldClose);
    if (shouldClose) {
        this.context.menuActions.closeMenu();
    }
  }

  render() {
    const { text, disabled, children, style, customStyles } = this.props;
    if (disabled) {
      const disabledStyles = [defaultStyles.optionTextDisabled, customStyles.optionText];
      return (
        <View style={[defaultStyles.option, customStyles.optionWrapper, style]}>
          {text ? <Text style={disabledStyles}>{text}</Text> : children}
        </View>
      );
    }
    return (
      <TouchableHighlight onPress={() => this._onSelect()}
        {...defaultTouchableStyles} {...customStyles.optionTouchable}>
        <View style={[defaultStyles.option, customStyles.optionWrapper, style]}>
          {text ? <Text style={customStyles.optionText}>{text}</Text> : children}
        </View>
      </TouchableHighlight>
    );
  }
}

MenuOption.propTypes = {
  disabled: React.PropTypes.bool,
  onSelect: React.PropTypes.func,
  text: React.PropTypes.string,
  value: React.PropTypes.any,
  customStyles: React.PropTypes.object,
};

MenuOption.defaultProps = {
  disabled: false,
  customStyles: {},
};

MenuOption.contextTypes = {
  menuActions: React.PropTypes.object,
};

const defaultStyles = StyleSheet.create({
  option: {
    padding: 5,
    backgroundColor: 'transparent',
    flex: 1,
  },
  optionTextDisabled: {
    color: '#ccc',
  },
});

const defaultTouchableStyles = {
  underlayColor: 'rgba(0, 0, 0, 0.1)',
};
