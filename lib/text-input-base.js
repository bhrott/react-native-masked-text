import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';

export class TextInputMaskBase extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		this._onReceiveValue(nextProps.value || '');
	}

	_onReceiveValue(value, callback) {
		let maskedValue = this.getMaskedValue(value);

		this.setState({
			value: maskedValue
		}, () => {
			if(!!callback) {
				callback(maskedValue);
			}
		});
	}

	_onChangeText(text) {
		this._onReceiveValue(text || '', (result) => {
			if(this.props.onChangeText) {
				this.props.onChangeText(result);
			}
		});
	}

	render() {
		let keyboardType = 'default';

		if('getKeyboardType' in this) {
			keyboardType = this.getKeyboardType();
		}

		return (
			<TextInput
				keyboardType={keyboardType}
				{...this.props}
				onChangeText={(text) => this._onChangeText(text)}
				value={this.state.value}
				/>
		);
	}
}
