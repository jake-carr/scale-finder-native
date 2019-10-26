import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { ScreenOrientation } from 'expo';
import HomePage from './components/HomePage';
import ScalePage from './components/ScalePage';
import { OrientationLock } from 'expo/build/ScreenOrientation/ScreenOrientation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Scale: {screen: ScalePage}
}, {
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {

  componentDidMount() {
    ScreenOrientation.lockAsync(OrientationLock.LANDSCAPE)
  }

  render() {
    return <AppContainer />;
  }
}