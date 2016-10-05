import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {ToolBoxService} from './toolbox-service';
import {MaskResolver} from './mask-resolver';

const TEXT_REF = '$text';

export class TextMask extends Component {
	constructor(props) {
		super(props);
		this._maskSettings = this._resolveMaskSettings();
		this.state = {
			value: this._getMaskedValue(props.value)
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			value: this._getMaskedValue(nextProps.value)
		});
	}

	getElement() {
		return this.refs[TEXT_REF];
	}

	_getMaskedValue(value) {
		return this._maskSettings.handler(ToolBoxService.getDefaultValue(value), this.props.options);
	}

	_resolveMaskSettings() {
		let settings = MaskResolver.resolve(this.props.type);

		if(!settings) {
			throw new Error('Not supported type');
		}

		return settings;
	}

	render() {
		return (
			<Text ref={TEXT_REF} {...this.props}>{this.state.value}</Text>
		);
	}
}
