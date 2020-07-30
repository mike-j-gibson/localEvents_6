import React, { useState } from 'react'
import { Button,Image, Text, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import stylesGeneral from '../stylesGeneral';

import { firebase } from '../../firebase/config'
// import { getState } from './reactHooks/state';
import {ScreenContainer} from '../parts/ScreenContainer'
// import { Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Input } from '../parts/Input'

export function AddArtist({navigation}) {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <ScreenContainer >
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always"
            >
                {/* <Text >Add Artist</Text> */}
                <Input
                    // style={stylesGeneral.input}
                    title="Display Name"
                    value={displayName}
                    onChangeText={displayName => setDisplayName(displayName)}
                    />
                <Input
                    // style={stylesGeneral.input}
                    title="E mail"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    />
                                    <Input
                    // style={stylesGeneral.input}
                    title="Display Name"
                    value={displayName}
                    onChangeText={displayName => setDisplayName(displayName)}
                    />
                <Input
                    // style={stylesGeneral.input}
                    title="E mail"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    />
                <Input
                    // style={stylesGeneral.input}
                    title="Display Name"
                    value={displayName}
                    onChangeText={displayName => setDisplayName(displayName)}
                    />
                <Input
                    // style={stylesGeneral.input}
                    title="E mail"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    />

                <View style={stylesGeneral.container}>
                    <TouchableOpacity
                        style={{backgroundColor: 'sienna', borderRadius: 5, margin: 10, padding: 20  }}
                        // onPress={() => onLoginPress()}
                    >
                        <Text style={styles.buttonTitle}>Save Artist</Text>
                    </TouchableOpacity>
                </View> 
            </KeyboardAwareScrollView>
        </ScreenContainer>
    )
}

