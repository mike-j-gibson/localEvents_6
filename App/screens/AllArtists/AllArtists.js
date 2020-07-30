import React, { useState } from 'react'
import { Button,Image, Text, TextInput, TouchableOpacity } from 'react-native'
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
// import { firebase } from '../../firebase/config'
// import { getState } from './reactHooks/state';
import {ScreenContainer} from '../parts/ScreenContainer'

export function AllArtists({navigation}) {

    return (
        <ScreenContainer >
            
                    <Text >All Artists----------------1</Text>
                    <Button
                    onPress={() => navigation.openD}
                    title="Info"
                    color="#fff"
                  />

        </ScreenContainer>
    )
}

export function AllArtists2({navigation}) {

    return (
        <ScreenContainer >
            
                    <Text >All Artists 2</Text>
        </ScreenContainer>
    )
}
