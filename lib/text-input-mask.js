import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';
import {ToolBoxService} from './toolbox-service';
import {MaskResolver} from './mask-resolver';

const INPUT_TEXT_REF = '$input-text';

export class TextInputMask extends Component {
	constructor(props) {
		super(props);
		this._maskSettings = this._resolveMaskSettings();

		this.state = {
			value: this._getMaskedValue(props.value)
		};
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.value !== undefined && nextProps.value !== null) {
			this.setState({
				value: this._getMaskedValue(nextProps.value)
			});
		}
	}

	getElement() {
		return this.refs[INPUT_TEXT_REF];
	}

	_resolveMaskSettings() {
		let settings = MaskResolver.resolve(this.props.type);

		if(!settings) {
			throw new Error('Not supported type');
		}

		return settings;
	}

	_getMaskedValue(value) {
		return this._maskSettings.handler(ToolBoxService.getDefaultValue(value), this.props.options);
	}

	_onReceiveValue(value, callback) {
		let maskedValue = this._getMaskedValue(value);

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
		return (
			<TextInput
				ref={INPUT_TEXT_REF}
				keyboardType={this._maskSettings.keyboardType}
				{...this.props}
				onChangeText={(text) => this._onChangeText(text)}
				value={this.state.value}
				/>
		);
	}
}
