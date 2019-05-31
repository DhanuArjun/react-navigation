import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';

const AppNavigator = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen
  },
  {
    initialRouteName: 'ContactList'
  }
);

export default createAppContainer(AppNavigator);
