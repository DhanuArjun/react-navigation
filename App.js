// import Sw from './examples/StackNavigator'
// export default Sw

// import { createAppContainer } from 'react-navigation'
// const App = createAppContainer(Sw)

import React from 'react';
import { StyleSheet, Button, View, Text, SectionList } from 'react-native';
import { Constants } from 'expo';
import AppNavigator from './Navigator';
import contacts from './contacts';

export default class App extends React.Component {
  state = {
    contacts: contacts
  };

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact]
    }));
  };
  render() {
    console.log(this.state.contacts);
    return <AppNavigator screenProps={{ contacts: this.state.contacts }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  }
});
