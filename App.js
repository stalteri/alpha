import { StatusBar } from 'expo-status-bar';
import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends PureComponent {

  render() {

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! s</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
