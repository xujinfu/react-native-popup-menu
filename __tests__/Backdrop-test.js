import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { render, normalizeStyle } from './helpers';
const { objectContaining } = jasmine;

jest.dontMock('../src/Backdrop');
const Backdrop = require('../src/Backdrop').default;

const { createSpy } = jasmine;

describe('Backdrop', () => {

  it('should render component', () => {
    const { output } = render(
      <Backdrop onPress={createSpy()} />
    );
    expect(output.type).toEqual(TouchableWithoutFeedback);
    const view = output.props.children;
    expect(view.type).toEqual(View);
  });

  it('should trigger on press event', () => {
    const onPressSpy = createSpy();
    const { output } = render(
      <Backdrop onPress={onPressSpy} />
    );
    expect(output.type).toEqual(TouchableWithoutFeedback);
    expect(typeof output.props.onPress).toEqual('function');
    output.props.onPress();
    expect(onPressSpy).toHaveBeenCalled();
  });

  it('should not have z-index', () => {
    const { output } = render(
      <Backdrop onPress={createSpy()} />
    );
    expect('zIndex' in normalizeStyle(output.props.style)).toEqual(false);
  });

  it('should have z-index', () => {
    const { output } = render(
      <Backdrop onPress={createSpy()} zIndex={5} />
    );
    expect(normalizeStyle(output.props.style)).toEqual(objectContaining({
      zIndex: 5
    }));
  });

});
