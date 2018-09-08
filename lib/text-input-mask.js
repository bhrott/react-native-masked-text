// @flow
import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import BaseTextComponent from './base-text-component'

export default class TextInputMask extends BaseTextComponent {
    getElement() {
        return this._inputElement
    }

    _onChangeText(text) {
        let self = this

        if (!this._checkText(text)) {
            return
        }

        self.updateValue(text).then(maskedText => {
            if (self.props.onChangeText) {
                this.getElement().setNativeProps({ text: maskedText })
                self.props.onChangeText(maskedText)
            }
        })
    }

    _checkText(text) {
        if (this.props.checkText) {
            return this.props.checkText(this.state.value, text)
        }

        return true
    }

    _getKeyboardType() {
        return this.props.keyboardType || this._maskHandler.getKeyboardType()
    }

    render() {
        let Input = TextInput
        let customTextInputProps = {}

        if (this.props.customTextInput) {
            Input = this.props.customTextInput
            customTextInputProps = this.props.customTextInputProps || {}
        }

        return (
            <Input
                ref={ref => {
                    if (ref) {
                        this._inputElement = ref

                        if (typeof this.props.refInput === 'function') {
                            this.props.refInput(ref)
                        }
                    }
                }}
                keyboardType={this._getKeyboardType()}
                {...this.props}
                {...customTextInputProps}
                onChangeText={text => this._onChangeText(text)}
                value={this.state.value}
            />
        )
    }
}
