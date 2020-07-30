import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Platform } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "left",
    backgroundColor: Platform.OS === 'web' ? '#E5D7B3' : 'tan' // Set your own custom Color
  },
  input: {
    height: 40,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    // marginTop: 10,
    maxWidth: 200,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16
},
text: {
    // height: 48,
    // borderRadius: 5,
    // overflow: 'hidden',
    // backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    // marginRight: 30,
    // paddingLeft: 16
},


});

export const Input = (props) => (
    <View style={styles.container}>
        <Text style={styles.text}>{props.title}</Text>
        <TextInput
            style={styles.input}
            placeholder={props.title}
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => props.onChangeText(text)}
            value={props.value}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
        />
    </View>
);

