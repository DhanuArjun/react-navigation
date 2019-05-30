import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// Home
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          We have {this.props.screenProps.currentFriends.length} Friends
        </Text>
        <Button
          title="add some frieds"
          onPress={() => {
            this.props.navigation.navigate("Fd");
          }}
        />
      </View>
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
