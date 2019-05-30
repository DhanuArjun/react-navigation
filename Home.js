// import Sw from './examples/StackNavigator'
// export default Sw

// import { createAppContainer } from 'react-navigation'
// const App = createAppContainer(Sw)

import React from "react";
import { StyleSheet, Button, View, Text, SectionList } from "react-native";
import { Constants } from "expo";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import contacts from "./contacts";
import AddContactScreen from "./screens/AddContactScreen";
import ContactListScreen from "./screens/ContactListScreen";

const AppNavigator = createSwitchNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen
  },
  {
    initialRouteName: "ContactList"
  }
);
console.log(this.state.contacts);
class App extends React.Component {
  state = {
    contats: contacts
  };

  addContact = newContact => {
    this.setState(prevState => ({
      showForm: false,
      contacts: [...prevState.contacts, newContact]
    }));
  };
  render() {
    return <AppNavigator screenProps={{ contacts: this.state.contacts }} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight
  }
});

export default createAppContainer(AppNavigator);
