import React, { Component } from "react";
import MaskResolver from "./mask-resolver";

export default class BaseTextComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.type,
      value: "",
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

      if (self._mustUpdateValue(maskedText)) {
        self.setState(
          {
            value: maskedText
          },
          () => {
            resolve({
              value: maskedText,
              rawValue: self.getRawValue()
            });
          }
        );
      } else {
        resolve({
          value: this.state.value,
          rawValue: this.getRawValue()
        });
      }
    });
  }

  isValid() {
    return this._maskHandler.validate(
      this._getDefaultValue(this.state.value),
      this.state.options
    );
  }

  getRawValue() {
    const result = this._maskHandler.getRawValue(
      this._getDefaultValue(this.state.value),
      this.state.options
    );
    return result;
  }

  _mustUpdateValue(newValue) {
    return this.state.value !== newValue;
  }

  _resolveMaskHandler() {
    this._maskHandler = MaskResolver.resolve(this.state.type);
  }

  _bindProps(props) {
    let self = this;
    let changeMaskHandler = this.state.type !== props.type;

    self.setState(
      {
        type: props.type,
        options: props.options
      },
      () => {
        if (changeMaskHandler) {
          self._resolveMaskHandler();
        }

        let value = self._getDefaultMaskedValue(props.value);

        self.setState({
          value: value
        });
      }
    );
  }

  _getDefaultMaskedValue(value) {
    if (this._getDefaultValue(value) === "") {
      return "";
    }

    return this._getMaskedValue(value);
  }

  _getMaskedValue(value) {
    let oldValue = this.state.value;

    return this._maskHandler.getValue(
      this._getDefaultValue(value),
      this.state.options,
      oldValue
    );
  }

  _getDefaultValue(value) {
    if (value === undefined || value === null) {
      return "";
    }

    return value;
  }
}
