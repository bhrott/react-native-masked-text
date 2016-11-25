import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import BaseTextComponent from './base-text-component';

const TEXT_REF = '$text';

export default class TextMask extends BaseTextComponent {
	constructor(props) {
		super(props);
	}

	getElement() {
		return this.refs[TEXT_REF];
	}

	render() {
		return (
			<Text ref={TEXT_REF} {...this.props}>{this.state.value}</Text>
		);
	}
}
