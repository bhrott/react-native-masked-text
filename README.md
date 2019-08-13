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

For all the masks you will use in this way:

```jsx
import { TextInputMask } from 'react-native-masked-text'

//...

<TextInputMask
  type={'type-of-the-mask'}
  options={
    {
      // the options for your mask if needed
    }
  }

  // dont forget to set the "value" and "onChangeText" props
  value={this.state.text}
  onChangeText={text => {
    this.setState({
      text: text
    })
  }}
/>
```

### Cel Phone

Mask:

-   BRL (default): `(99) 9999-9999` or `(99) 99999-9999` (will detect automatically)
-   INTERNATIONAL: `+999 999 999 999`

If you need a different formatting, use the `Custom` mask =).

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/CelPhone.js)):

```jsx
<TextInputMask
  type={'cel-phone'}
  options={{
    maskType: 'BRL',
    withDDD: true,
    dddMask: '(99) '
  }}
  value={this.state.international}
  onChangeText={text => {
    this.setState({
      international: text
    })
  }}
/>
```
#### Options

| name       | type    | required | default | description |
| ---------- | ------- | -------- | ------- | ----------- |
| maskType | string | no | `maskType` | the type of the mask to use. Available: `BRL` or `INTERNATIONAL` |
| withDDD | boolean | no | `true` | if the mask type is `BRL`, include the DDD |
| dddMask | string | no | `(99) ` | if the mask type is `BRL`, the DDD mask |

#### Methods

You can get the `unmasked` value using the `getRawValue` method:

```jsx
<TextInputMask
  type={'cel-phone'}
  options={{
    maskType: 'BRL',
    withDDD: true,
    dddMask: '(99) '
  }}
  value={this.state.international}
  onChangeText={text => {
    this.setState({
      international: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.phoneField = ref}
/>

//...

const unmasked = this.phoneField.getRawValue()
// in the mask: (51) 98765-4321
// unmasked: 51987654321
```


### CPF

Mask: `999.999.999-99`

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/Cpf.js)):

```jsx
<TextInputMask
  type={'cpf'}
  value={this.state.cpf}
  onChangeText={text => {
    this.setState({
      cpf: text
    })
  }}
/>
```

#### Methods

You can check if the cpf is valid by calling the `isValid()` method:

```jsx
<TextInputMask
  type={'cpf'}
  value={this.state.cpf}
  onChangeText={text => {
    this.setState({
      cpf: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.cpfField = ref}
/>

// get the validation

const cpfIsValid = this.cpfField.isValid()
console.log(cpfIsValid) // boolean
```

You can get the `unmasked` cpf calling the `getRawValue` method:

```jsx
const unmasked = this.cpfField.getRawValue()
// in the mask: 123.456.789-01
// unmasked: 12345678901
```

### CNPJ

Mask: `99.999.999/9999-99`

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/Cnpj.js)):

```jsx
<TextInputMask
  type={'cnpj'}
  value={this.state.cnpj}
  onChangeText={text => {
    this.setState({
      cnpj: text
    })
  }}
/>
```

#### Methods

You can check if the cnpj is valid by calling the `isValid()` method:

```jsx
<TextInputMask
  type={'cnpj'}
  value={this.state.cnpj}
  onChangeText={text => {
    this.setState({
      cnpj: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.cnpjField = ref}
/>

// get the validation

const cnpjIsValid = this.cnpjField.isValid()
console.log(cnpjIsValid) // boolean
```


You can get the `unmasked` cpf calling the `getRawValue` method:

```jsx
const unmasked = this.cnpjField.getRawValue()
// in the mask: 99.999.999/9999-99
// unmasked: 99999999999999
```

### Credit Card

Mask:

-   visa or master: `9999 9999 9999 9999` or `9999 **** **** 9999` (obfuscated)
-   amex: `9999 999999 99999` or `9999 ****** 99999` (obfuscated)
-   diners: `9999 999999 9999` or `9999 ****** 9999` (obfuscated)

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/CreditCard.js))

```jsx
<TextInputMask
  type={'credit-card'}
  options={{
    obfuscated: false,
    issuer: 'amex'
  }}
  value={this.state.creditCard}
  onChangeText={text => {
    this.setState({
      creditCard: text
    })
  }}
/>
```

#### Options

| name       | type    | required | default              | description |
| ---------- | ------- | -------- | -------------------- | ----------- |
| obfuscated | boolean | no       | `false`              | if the mask should be obfuscated or not|
| issuer     | string  | no       | `visa-or-mastercard` | the type of the card mask. The options are: `visa-or-mastercard`, `amex` or `diners` |


#### Methods

You can get the array containing the groups of the value value using the `getRawValue` method:

```jsx
<TextInputMask
  type={'credit-card'}
  options={{
    obfuscated: false,
    issuer: 'amex'
  }}
  value={this.state.creditCard}
  onChangeText={text => {
    this.setState({
      creditCard: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.creditCardField = ref}
/>

//...

const unmasked = this.creditCardField.getRawValue()
// in the mask: 9874 6541 3210 9874
// unmasked: [9874, 6541, 3210, 9874]
```

### Custom

Mask: `defined by pattern`

* `9` - accept digit.
* `A` - accept alpha.
* `S` - accept alphanumeric.
* `*` - accept all, EXCEPT white space.

Ex: `AAA-9999` 

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/Custom.js)):

```jsx
//
// SIMPLE
// 
<TextInputMask
  type={'custom'}
  options={{
    /**
     * mask: (String | required | default '')
     * the mask pattern
     * 9 - accept digit.
     * A - accept alpha.
     * S - accept alphanumeric.
     * * - accept all, EXCEPT white space.
    */
    mask: '999 AAA SSS ***'
  }}
  value={this.state.text}
  onChangeText={text => {
    this.setState({
      text: text
    })
  }}
  style={textInputStype}
/>


//
// ADVANCED
// 
<TextInputMask
  type={'custom'}
  options={{
    // required

    /**
     * mask: (String | required | default '')
     * the mask pattern
     * 9 - accept digit.
     * A - accept alpha.
     * S - accept alphanumeric.
     * * - accept all, EXCEPT white space.
    */
    mask: '999 AAA SSS ***',

    // optional

    /**
     * validator: (Function | optional | defaults returns true)
     * use this funcion to inform if the inputed value is a valid value (for invalid phone numbers, for example). The isValid method use this validator.
    */
    validator: function(value, settings) {
      return true
    },

    /**
     * getRawValue: (Function | optional | defaults return current masked value)
     * use this function to parse and return values to use what you want.
     * for example, if you want to create a phone number mask (999) 999-99-99 but want to get only
     * the numbers for value, use this method for this parse step.
    */
    getRawValue: function(value, settings) {
      return 'my converted value';
    },
    /**
     * translation: (Object | optional | defaults 9, A, S, *)
     * the dictionary that translate mask and value.
     * you can change defaults by simple override the key (9, A, S, *) or create some new.
    */
    translation: {
      // this is a custom translation. The others (9, A, S, *) still works.
      // this translation will be merged and turns into 9, A, S, *, #.
      '#': function(val) {
        if (val === ' ') {
          return val;
        }

        // if returns null, undefined or '' (empty string), the value will be ignored.
        return null;
      },
      // in this case, we will override build-in * translation (allow all characters)
      // and set this to allow only blank spaces and some special characters.
      '*': function(val) {
        return [' ', '#', ',', '.', '!'].indexOf(val) >= 0 ? val : null;
      }
    }
  }}
  value={this.state.text}
  onChangeText={text => {
    this.setState({
      text: text
    })
  }}
  style={textInputStype}
/>
```

#### Options

| name       | type    | required | default              | description |
| ---------- | ------- | -------- | -------------------- | ----------- |
| mask | string | **YES** | | The mask pattern |
| validator | function | no | function that returns `true` | the function that's validate the value in the mask |
| getRawValue | function | no | return current value | function to parsed value (like unmasked or converted) |
| translation | object (map{string,function}) | no | `9 - digit`, `A - alpha`, `S - alphanumeric`, `* - all, except space` | The translator to use in the pattern |


### Datetime

Mask:

* `DD/MM/YYYY HH:mm:ss`
* `DD/MM/YYYY`
* `MM/DD/YYYY`
* `YYYY/MM/DD`
* `HH:mm:ss`
* `HH:mm`
* `HH`

You can use `-` instead of `/` if you want.

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/Datetime.js)):

```jsx
<TextInputMask
  type={'datetime'}
  options={{
    format: 'YYYY/MM/DD'
  }}
  value={this.state.dt}
  onChangeText={text => {
    this.setState({
      dt: text
    })
  }}
/>
```

#### Options

| name       | type    | required | default              | description |
| ---------- | ------- | -------- | -------------------- | ----------- |
| format | string | **YES** | | The date format to be validated |


#### Methods

You can check if the date is valid by calling the `isValid()` method:

```jsx
<TextInputMask
  type={'datetime'}
  options={{
    format: 'YYYY/MM/DD'
  }}
  value={this.state.dt}
  onChangeText={text => {
    this.setState({
      dt: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.datetimeField = ref}
/>

// get the validation

const isValid = this.datetimeField.isValid()
console.log(isValid) // boolean
```

You can get the [moment](https://momentjs.com/) object from the date if it's valid calling the `getRawValue` method:

```jsx
const momentDate = this.datetimeField.getRawValue()
```

### Money

Mask: `R$999,99` (fully customizable)

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/Money.js)):

```jsx
// SIMPLE
<TextInputMask
  type={'money'}
  value={this.state.simple}
  onChangeText={text => {
    this.setState({
      simple: text
    })
  }}
/>

// ADVANCED
<TextInputMask
  type={'money'}
  options={{
    precision: 2,
    separator: ',',
    delimiter: '.',
    unit: 'R$',
    suffixUnit: ''
  }}
  value={this.state.advanced}
  onChangeText={text => {
    this.setState({
      advanced: text
    })
  }}
/>
```

#### Options

| name       | type    | required | default              | description |
| ---------- | ------- | -------- | -------------------- | ----------- |
| precision | number | no | `2` | The number of cents to show |
| separator | string | no | `,` | The cents separator |
| delimiter | string | no | `.` | The thousand separator |
| unit | string | no | `R$` | The prefix text |
| suffixUnit | string | no | `''` | The sufix text |


#### Methods

You can get the `number` value of the mask calling the `getRawValue` method:

```jsx
<TextInputMask
  type={'money'}
  value={this.state.simple}
  onChangeText={text => {
    this.setState({
      simple: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.moneyField = ref}
/>

const numberValue = this.moneyField.getRawValue()
console.log(numberValue) // Number

// CAUTION: the javascript do not support giant numbers.
// so, if you have a big number in this mask, you could have problems with the value...
```


### Only Numbers

Mask: `accept only numbers`

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/OnlyNumbers.js)):


```jsx
<TextInputMask
  type={'only-numbers'}
  value={this.state.value}
  onChangeText={text => {
    this.setState({
      value: text
    })
  }}
/>
```


### Zip Code

Mask: `99999-999`

Sample code ([source](https://github.com/benhurott/react-native-masked-text-samples/blob/master/ReactNativeMaskedTextSamples/Samples/OnlyNumbers.js)):


```jsx
<TextInputMask
  type={'zip-code'}
  value={this.state.value}
  onChangeText={text => {
    this.setState({
      value: text
    })
  }}
/>
```

#### Methods

You can get the `unmasked` value using the `getRawValue` method:

```jsx
<TextInputMask
  type={'zip-code'}
  value={this.state.value}
  onChangeText={text => {
    this.setState({
      value: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.zipCodeField = ref}
/>

//...

const unmasked = this.zipCodeField.getRawValue()
// in the mask: 98765-321
// unmasked: 98765321
```

### ... Utils

#### Including the `rawText` in `onChangeText` [1.12.0+]

If you need the raw value in every text change, you can use the `includeRawValueInChangeText`.

It will provide the masked and the raw text in every text change.

```jsx
<TextInputMask
  type={'cpf'}
  value={this.state.value}
  includeRawValueInChangeText={true}
  onChangeText={(maskedText, rawText) => {
    // maskedText: 123.456.789-01
    // rawText: 12345678901
  }}
/>
```


#### Getting the `TextInput` instance
If you want to get the `TextInput` raw component, use the `getElement()` method:

```jsx
<TextInputMask
  type={'zip-code'}
  value={this.state.value}
  onChangeText={text => {
    this.setState({
      value: text
    })
  }}
  // add the ref to a local var
  ref={(ref) => this.zipCodeField = ref}
/>

//...

const textInput = this.zipCodeField.getElement()
```

#### Blocking user to add character

If you want, you can block a value to be added to the text using the `checkText` prop:

```jsx
<TextInputMask
  //...
  /**
   * @param {String} previous the previous text in the masked field.
   * @param {String} next the next text that will be setted to field.
   * @return {Boolean} return true if must accept the value.
  */
  checkText={
    (previous, next) => {
      return next === 'your valid value or other boolean condition';
    }
  }
/>
```

#### Using custom text inputs

You can use this prop if you want custom text input instead native TextInput component:

```jsx
const Textfield = MKTextField.textfield()
  .withPlaceholder('Text...')
  .withStyle(styles.textfield)
  .build();


<TextInputMask
  // ...

  // the custom text input component
  customTextInput={Textfield}

  // the props to be passed to the custom text input
  customTextInputProps={{
    style:{ width: '80%' },
    label:'Birthday'
  }}
/>
```

#### About the normal text input props

You can use all the normal TextInput props from React-Native, with this in mind:

-   onChangeText is intercepted by component.
-   value is intercepted by component.
-   if you pass keyboardType, it will override the keyboardType of masked component.

#### Code Samples

If you want, you can check the code samples in this repo:

[react-native-masked-text-samples](https://github.com/benhurott/react-native-masked-text-samples)

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
