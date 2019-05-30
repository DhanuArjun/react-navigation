import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./examples/Friends/AppNavigator";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possibleFriends: ["ram", "rohan", "meeru"],
      currentFriends: ["ram", "Ravan"]
    };
  }

  addFriend = index => {
    const { currentFriends, possibleFriends } = this.state;

    // pull friends out of possibleFrieds
    const addedFriends = possibleFriends.splice(index, 1);

    // And put friends in the currentFriends
    currentFriends.push(addedFriends);

    // finally update our app state
    this.setState({
      currentFriends,
      possibleFriends
    });
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          currentFriends: this.state.currentFriends,
          possibleFriends: this.state.possibleFriends,
          addFriend: this.addFriend
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
