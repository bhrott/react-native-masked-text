# react-native-masked-text

WORK IN PROGRESS!

This repository is under development. See you later =).

This is a simple masked text (normal text and input text) component for React-Native.

Thanks to [vanilla-masker](https://github.com/BankFacil/vanilla-masker) =).

## Supported Versions
React-native: 0.32.0 or higher

## Install
`npm install react-native-masked-text --save`

## Usage (TextInputMask)
After install, import the lib: <br />
`import {TextInputMask} from 'react-native-masked-text'`

And now you can use the component:
``` jsx
<View style={styles.container}>
    <TextInputMask style={styles.input}
				   type={'zip-code'}
				   options={/* component options */}
				   value={this.state.yourValueProp}
				   onChangeText={(text) => this.yourFunction(text)} />
</View>
```

### Props
* **type**
	* *cpf*: use the mask `999.999.999-99` and `numeric` keyboard.
	* *zip-code*: use the mask `99999-999` and `numeric` keyboard.
	* *only-numbers*: accept only numbers on field with `numeric` keyboard.
	* *money*: use the mask `R$ 0,00` on the field with `numeric` keyboard. It accepts options (see later in this doc).
	* *cel-phone*: use the mast `(99) 9999-9999` or `(99) 99999-9999` (changing automaticaly by length).
	* *custom*: use your custom mask (see the options props later in this doc).
* **TextInput Props**
	* You can use the native props of TextInput, with this in mind:
		* onChangeText is intercepted by component.
		* value is intercepted by component.
		* if you pass keyboardType, it will override the keyboardType of masked component.


**Custom Props** <br />
For `type={'money'}` <br />
* *options={...}*
	* `precision` (Number, default 2): the decimal places.
	* `separator` (String, default ','): the decimal separator.
	* `delimiter` (String, default '.'): the thousand separator.
	* `unit`: (String, default 'R$'): the prefix text.
	* `suffixUnit` (String, default ''): the suffix text.
	* `zeroCents` (Boolean, default false): if must show cents.

Ex: `<TextInputMask type={'money'} options={{ unit: 'US$' }} />`

For `type={'custom'}` <br />
* *options={...}*
	* `mask` (String, default ''): your mask template.
		* `9`: accept digit.
		* `A`: accept alpha.
		* `S`: accept alphanumeric.

Ex: `<TextInputMask type={'money'} options={{ mask: 'AAAA-9' }} />`

### Methods
`getElement()`: return the instance of *TextInput* component.


## Usage (TextMask)
Use this component to display Text with formated mask.
<br />
Import the lib: <br />
`import {TextMask} from 'react-native-masked-text'`

And now you can use the component:
``` jsx
<View style={styles.container}>
	<TextMask style={styles.input}
			  type={'zip-code'}
			  options={/* component options */}
			  value={this.state.yourValueProp} />
</View>
```

### Props
The same of *TextInputMask*, but for React-Native *Text* component instead *TextInput*.
<br />
*Warning*: if the value not match the mask, it will not appear.

### Methods
`getElement()`: return the instance of *Text* component.


## Extra (MaskService)
If you want, we expose the `MaskService`. You can use it:

``` javascript
import {MaskService} from 'react-native-masked-text'

let maskService = new MaskService();

let money = maskService.toMoney(1234, {
	unit: 'US$',
	separator: '.'
});

```

**Methods**
* toMoney(number, options)
	* number: Number
	* options: Object (same for TextInputMask type=money)
* toCpf(value)
	* value: String or Number
* toZipCode(value)
	* value: String or Number
* toNumber(text)
	* text: String
* toCelPhone(value)
	* value: String or Number
* toCustom(text, options)
	* text: String
	* options: Object (same for TextInputMask type=custom)

##Roadmap
* Phone number (for other contries)
* Possibility to change custom mask on text-change.
