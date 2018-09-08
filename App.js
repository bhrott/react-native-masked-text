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
                    type={'datetime'}
                    options={{
                        format: 'DD-MM-YYYY HH:mm:ss'
                    }}
                    placeholder={'datetime DD-MM-YYYY HH:mm:ss'}
                    value={this.state.datetime}
                    onChangeText={datetime => this.setState({ datetime })}
                />
                <TextInputMask
                    style={styles.input}
                    type={'credit-card'}
                    options={{
                        obfuscated: true
                    }}
                    placeholder={'credit-card obfuscated'}
                    value={this.state.creditCard}
                    onChangeText={creditCard => {
                        this.setState({ creditCard })
                        console.log(this.state)
                    }}
                />
                <TextInputMask
                    style={styles.input}
                    type={'custom'}
                    options={{
                        mask: '999$999',
                        translation: {
                            $: val => {
                                return val === ' ' || val === '0' ? val : ''
                            }
                        }
                    }}
                    placeholder={'custom 999$999'}
                    value={this.state.custom}
                    onChangeText={custom => {
                        this.setState({ custom })
                        console.log(this.state)
                    }}
                />
                <TextInputMask
                    style={styles.input}
                    type={'money'}
                    placeholder={'money'}
                    value={this.state.money}
                    onChangeText={money => {
                        this.setState({ money })
                        console.log(this.state)
                    }}
                />
                <TextInputMask
                    style={styles.input}
                    type="custom"
                    options={{ mask: '999 (99) 999 99 99' }}
                    placeholder={'custom 999 (99) 999 99 99'}
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
