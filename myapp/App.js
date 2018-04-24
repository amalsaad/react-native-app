/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Button,
  Text 
} from 'react-native';


//import Routes from './Routes';
//import {Root, Root2} from './pages/Profile';
import {Root} from './pages/Navigations';

// export default class App extends Component{
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar
//            backgroundColor="#1c313a"
//            barStyle="light-content"
//          />
//         {/* <Profile/> */}
//         <Text>amal</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//   }
// });

class App extends Component {
  render() {
    return <Root />;
  }
}

export default App;


// import { StackNavigator } from 'react-navigation';

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Details!</Text>
//       </View>
//     );
//   }
// }

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         { /* other code from before here */ }
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// // class SettingsScreen extends React.Component {
// //   render() {
// //     return (
// //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //         { /* other code from before here */ }
// //         <Button
// //           title="Go to Details"
// //           onPress={() => this.props.navigation.navigate('Details')}
// //         />
// //       </View>
// //     );
// //   }
// // }

// // const HomeStack = StackNavigator({
// //   Home: { screen: HomeScreen },
// //   Details: { screen: DetailsScreen },
// // });

// // // const SettingsStack = StackNavigator({
// // //   Settings: { screen: SettingsScreen },
// // //   Details: { screen: DetailsScreen },
// // // });

// // export default TabNavigator(
// //   {
// //     Home2: { screen: HomeStack },
// //     //Settings: { screen: SettingsStack },
// //   },
// //   {
// //     /* Other configuration remains unchanged */
// //   }
// // );

// export default StackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });
