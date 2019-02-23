# react-native-masked-text

![downloads](https://img.shields.io/npm/dt/react-native-masked-text.svg)
[![Help Contribute to Open Source](https://www.codetriage.com/benhurott/react-native-masked-text/badges/users.svg)](https://www.codetriage.com/benhurott/react-native-masked-text)

![logo](docs/res/logo.png)

This is a simple masked text (normal text and input text) component for React-Native.

## Supported Versions

React-native: 0.32.0 or higher

## Install

`npm install react-native-masked-text --save`

## Usage (TextInputMask)

### CPF

Mask: `999.999.999-99`

Sample code:

<iframe src="https://raw.githubusercontent.com/benhurott/react-native-masked-text-samples/master/ReactNativeMaskedTextSamples/Samples/Cpf.js"></iframe>

## Usage (TextMask)

```jsx
import React, { Component } from 'react'

// import the component
import { TextMask } from 'react-native-masked-text'

export default class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '4567123409871234'
        }
    }

    render() {
        // the type is required but options is required only for some specific types.
        // the sample below will output 4567 **** **** 1234
        return (
            <TextMask
                value={this.state.text}
                type={'credit-card'}
                options={{
                    obfuscated: true
                }}
            />
        )
    }
}
```

### Props

The same of _TextInputMask_, but for React-Native _Text_ component instead _TextInput_.
<br />
_Warning_: if the value not match the mask, it will not appear.

### Methods

`getElement()`: return the instance of _Text_ component.

## Extra (MaskService)

If you want, we expose the `MaskService`. You can use it:

**Methods**

-   static toMask(type, value, settings): mask a value.
    -   `type` (String, required): the type of the mask (`cpf`, `datetime`, etc...)
    -   `value` (String, required): the value to be masked
    -   `settings` (Object, optional): if the mask type accepts options, pass it in the settings parameter
-   static toRawValue(type, maskedValue, settings): get the raw value of a masked value.
    -   `type` (String, required): the type of the mask (`cpf`, `datetime`, etc...)
    -   `maskedValue` (String, required): the masked value to be converted in raw value
    -   `settings` (Object, optional): if the mask type accepts options, pass it in the settings parameter
-   static isValid(type, value, settings): validate if the mask and the value match.
    -   `type` (String, required): the type of the mask (`cpf`, `datetime`, etc...)
    -   `value` (String, required): the value to be masked
    -   `settings` (Object, optional): if the mask type accepts options, pass it in the settings parameter
-   static getMask(type, value, settings): get the mask used to mask the value

Ex:

```jsx
import { MaskService } from 'react-native-masked-text'

var money = MaskService.toMask('money', '123', {
    unit: 'US$',
    separator: '.',
    delimiter: ','
})

// money -> US$ 1.23
```

## Throubleshooting

-   If the `es2015` error throw by babel, try run `react-native start --reset-cache`

## Changelog

View changelog [HERE](CHANGELOG.md)

## Thanks to

-   <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

-   Thanks to [vanilla-masker](https://github.com/BankFacil/vanilla-masker) =).
-   Thanks to [moment](http://momentjs.com/) =).
