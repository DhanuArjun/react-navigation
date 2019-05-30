import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// Friends
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here</Text>
        <Button
          title="back to Home"
          onPress={() => this.props.navigation.navigate("Home")}
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
