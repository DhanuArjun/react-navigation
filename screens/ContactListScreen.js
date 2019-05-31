import React from 'react';
import { StyleSheet, Button, View, Text, SectionList } from 'react-native';
import { Constants } from 'expo';

import contacts from '../contacts';
import SectionListContacts from '../SectionListContacts';

// set state to the app
export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Contacts',
    headerRight: (
      <Button
        title="Add"
        onPress={() => {
          navigation.navigate('AddContact');
        }}
      />
    )
  });

  state = {
    showContacts: true
  };

  // set opposite state to the showContacts
  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts }));
  };

  showForm = () => {
    this.props.navigation.navigate('AddContact');
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.showContacts && (
          <SectionListContacts
            contacts={this.props.screenProps.contacts}
            onSelectContact={contact => {
              this.props.navigation.navigate('ContactDetails', {
                phone: contact.phone,
                name: contact.name
              });
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight
  }
});
