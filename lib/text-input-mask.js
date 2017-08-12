import React, { Component } from 'react';
import {
	StyleSheet,
	TextInput
} from 'react-native';
import BaseTextComponent from './base-text-component';

const INPUT_TEXT_REF = '$input-text';

let Input = TextInput
let customTextInputProps = {}

export default class TextInputMask extends BaseTextComponent {
	constructor(props) {
		super(props);
		if (props.customTextInput) Input = props.customTextInput
		if (props.customTextInputProps) customTextInputProps = props.customTextInputProps
	}

	getElement() {
		return this.refs[INPUT_TEXT_REF];
	}

	_onChangeText(text) {
		let self = this;

		if (!this._checkText(text)) {
			return;
		}

		self.updateValue(text)
			.then(maskedText => {
				if (self.props.onChangeText) {
					self.props.onChangeText(maskedText);
				}
			});
	}

	_checkText(text) {
		if (this.props.checkText) {
			return this.props.checkText(this.state.value, text);
		}

		return true;
	}

	_getKeyboardType() {
		return this.props.keyboardType || this._maskHandler.getKeyboardType()
	}

	render() {
		return (
			<Input
				ref={INPUT_TEXT_REF}
				keyboardType={this._getKeyboardType()}
				{...this.props}
				{...customTextInputProps}
				onChangeText={(text) => this._onChangeText(text)}
				value={this.state.value}
			/>
		);
	}
}
