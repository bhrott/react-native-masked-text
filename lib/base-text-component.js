import React, { Component } from 'react';
import MaskResolver from './mask-resolver';

export default class BaseTextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.type,
            value: '',
            options: null
        };

        this._resolveMaskHandler();
    }

    componentDidMount() {
        this._bindProps(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this._bindProps(nextProps);
    }

    updateValue(text) {
        let self = this;

        return new Promise((resolve, reject) => {
            let maskedText = self._getMaskedValue(text);
            self.setState({
                value: maskedText
            }, () => {
                resolve(maskedText);
            });
        });
    }

    isValid() {
        return this._maskHandler.validate(
            this._getDefaultValue(this.state.value),
            this.state.options);
    }

    _resolveMaskHandler() {
        this._maskHandler = MaskResolver.resolve(this.state.type);
    }

    _bindProps(props) {
        let self = this;
        let changeMaskHandler = this.state.type !== props.type;

        self.setState({
            type: props.type,
            options: props.options
        }, () => {
            if(changeMaskHandler) {
                self._resolveMaskHandler();
            }
            
            self.setState({
                value: self._getMaskedValue(props.value)
            });
        });
    }

    _getMaskedValue(value) {
        return this._maskHandler.getValue(
            this._getDefaultValue(value), 
            this.state.options);
	}

    _getDefaultValue(value) {
		if(value === undefined || value === null) {
			return '';
		}

		return value;
	}
}