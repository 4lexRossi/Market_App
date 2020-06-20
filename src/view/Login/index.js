import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';
import Button from '../../components/Button'

import logo from '../../../assets/logoLex.png'

import firebase from '../../services/firebase';

export default function Login({ navigation }) {
    const [user, setUser] = useState()
    const [pass, setPass] = useState()

    function handleSigin() {

        if (user, pass) {

            firebase.auth().signInWithEmailAndPassword(user, pass,)
                .then((response) => {                    
                    navigation.navigate('Index')
                })
                .catch((erro) => {                    
                    Alert.alert('Ops', 'E-mail ou senha incorreto')
                })
        } else {
            Alert.alert('Erro', 'Preenche os campos com email e senha')
        }

    }
    return (
        <View style={styles.container}>
            <Image source={logo} />
            <View style={styles.containerInput}>
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={(text) => { setUser(text) }}
                    style={styles.input}
                />
                <TextInput
                    name="user"
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    placeholder="Senha"
                    onChangeText={(text) => { setPass(text) }}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <Button style="outline" onPress={handleSigin}><Text style={styles.text_primary}>ENTRAR</Text></Button>
            <TouchableOpacity onPress={() => navigation.navigate('RedefinePass')} style={styles.redefinePass}><Text style={styles.text_primary}>Esqueceu sua senha?</Text></TouchableOpacity>
        </View>
    );
}
