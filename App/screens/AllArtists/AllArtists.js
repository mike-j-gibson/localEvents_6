import React, { useState } from 'react'
import { Button,Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
// import { firebase } from '../../firebase/config'
// import { getState } from './reactHooks/state';

export function AllArtists({navigation}) {

    return (
        <View >
            
                    <Text >All Artists 1</Text>
                    <Button
                    onPress={() => navigation.openD}
                    title="Info"
                    color="#fff"
                  />

        </View>
    )
}

export function AllArtists2({navigation}) {

    return (
        <View >
            
                    <Text >All Artists 2</Text>
        </View>
    )
}
