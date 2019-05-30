import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Button, View } from 'react-native';

class ScreenComponentOne extends React.Component{
  render() {
    return(
      <View style={{flex: 1,
        alignItem: 'center',
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: 'teal' }}>
        <Button title="Go To Screen Two" onPress={ () => {
          this.props.navigation.navigate('routeTwo')
        }} />
      </View>
    )
  }
}

class ScreenComponentTwo extends React.Component{
  render() {
    return(
      <View style={{flex: 1,
        alignItem: 'center',
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: 'blue' }}>
        <Button title="Go To Screen One" onPress={() => {
          this.props.navigation.navigate('routeOne')
          }}
        />
      </View>
    )
  }
}

const AppNavigator = createSwitchNavigator({
	routeOne: ScreenComponentOne,
	routeTwo: ScreenComponentTwo,
})

const App = createAppContainer(AppNavigator)
export default App