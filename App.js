/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

export default class App extends Component {
    state = {
        datetime: '',
        creditCard: '',
        custom: '',
        money: ''
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInputMask
                    style={styles.input}
                    type="cpf-cnpj"
                    placeholder={'cpf-cnpj'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    input: {
        height: 50,
        width: '80%',
        borderColor: 'steelblue',
        borderWidth: 2
    }
})
