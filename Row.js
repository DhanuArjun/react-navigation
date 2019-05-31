import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Row = props => (
  <TouchableOpacity
    style={{ padding: 20 }}
    onPress={() => {
      props.onSelectContact(props);
    }}
  >
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </TouchableOpacity>
);

export default Row;
