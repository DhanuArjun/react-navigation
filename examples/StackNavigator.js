import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, View, Text } from 'react-native';


function randomNumber() {
  return Math.floor(Math.random() * 10);
}
// stack navigator you have a option called navigation options
// it give some options to add add to the screen 
class ScreenComponentOne extends React.Component{
  static navigationOptions = {
    headerTitle: 'Screen One',
    headerTintColor: 'teal',
  }

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
  static navigationOptions = {
    headerTitle: 'Screen Two',
  }
  render() {
    return(
      <View style={{flex: 1,
        alignItem: 'center',
        justifyContent: 'center',
        borderWidth: 20,
        borderColor: 'blue' }}>
        <Button title="Go To Screen three" onPress={() => {
          this.props.navigation.navigate('routeThree', {
            number: randomNumber()
            })
          }}
        />
      </View>
    )
  }
}

class ScreenComponentThree extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: `number: ${navigation.getParam('number')}`,
    }
  };

  render() {
    return(
      <View style={{flex: 1,
        alignItem: 'center',
        justifyContent: 'center'}}>
        <Text 
          style={{fontSize: 25}}>
          {this.props.navigation.getParam('number')}
          </Text>
        <Button title="Go To Screen Two" onPress={() => {
          this.props.navigation.goBack()
          }}
        />
        <Button title="Random number" onPress={() => {
          this.props.navigation.setParams({number: randomNumber()})
          }}
        />
      </View>
    )
  }
}

const AppNavigator = createStackNavigator({
	routeOne: ScreenComponentOne,
	routeTwo: ScreenComponentTwo,
  routeThree: ScreenComponentThree,
})

const App = createAppContainer(AppNavigator)
export default App