import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ContactDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name')
  });

  render() {
    return (
      <View>
        <Text>{this.props.navigation.getParam('phone')}</Text>
        <Button
          title="Go to contacts"
          onPress={() => {
            this.props.navigation.push('ContactList');
          }}
        />
      </View>
    );
  }

  __goToRandom = () => {
    // todo
  };
}
