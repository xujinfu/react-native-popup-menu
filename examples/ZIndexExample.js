import React from 'react';
import { Text, View } from 'react-native';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-popup-menu';

const BasicExample = () => (
  <MenuContext style={{flexDirection: 'column', padding: 30}} config={{zIndex: 2}}>
    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
      <MenuTrigger text='Select option' />
      <MenuOptions>
        <Text style={{backgroundColor: 'pink'}}>zIndex=2</Text>
        <MenuOption value={1} text='One' />
        <MenuOption value={2} text='Two' />
        <MenuOption value={3} disabled={true} text='Three' />
      </MenuOptions>
    </Menu>
    <View style={{zIndex: 1, backgroundColor: 'blue'}}>
      <Text>zIndex=1</Text>
    </View>
    <View style={{zIndex: 3, backgroundColor: 'red'}}>
      <Text>zIndex=3</Text>
    </View>
  </MenuContext>
);

export default BasicExample;
