/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';

AppRegistry.registerComponent(appName, () => Login);
