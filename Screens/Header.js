import * as React from 'react';
import { Text , View , StyleSheet } from 'react-native';

const MyComponent = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.Title}>
          Weather App
      </Text>
    </View>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
    header:{
        height:45,
        backgroundColor:"#00aaff",
        justifyContent:"center"
    },
    Title:{
        fontSize:20,
        color:"#fff",
        textAlign:"center",
    }
})