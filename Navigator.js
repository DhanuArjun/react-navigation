import { createAppContainer, createStackNavigator } from 'react-navigation';
import AddContactScreen from './screens/AddContactScreen';
import ContactListScreen from './screens/ContactListScreen';

const AppNavigator = createStackNavigator(
  {
    AddContact: AddContactScreen,
    ContactList: ContactListScreen
  },
  {
    initialRouteName: 'ContactList'
  }
);

export default createAppContainer(AppNavigator);
