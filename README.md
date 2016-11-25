# react-native-masked-text

This is a simple masked text (normal text and input text) component for React-Native.

Thanks to [vanilla-masker](https://github.com/BankFacil/vanilla-masker) =).
Thanks to [moment](http://momentjs.com/) =).


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
    <TextInputMask type={'zip-code'}
				   options={/* component options */} />
</View>
```

### Props
* **type**
	* *cpf*: use the mask `999.999.999-99` and `numeric` keyboard.
	* *cnpj*: use the mask `99.999.999/9999-99` and `numeric` keyboard.
	* *zip-code*: use the mask `99999-999` and `numeric` keyboard.
	* *only-numbers*: accept only numbers on field with `numeric` keyboard.
	* *money*: use the mask `R$ 0,00` on the field with `numeric` keyboard. It accepts options (see later in this doc).
	* *cel-phone*: use the mask `(99) 9999-9999` or `(99) 99999-9999` (changing automaticaly by length). It accepts options (see later in this doc).
	* *datetime*: use datetime mask with moment format (default DD/MM/YYYY HH:mm:ss). It accepts options (see later in this doc).
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


For `type={'cel-phone'}` <br />
* *options={...}*
	* `withDDD` (Boolean, default true): if the ddd will be include in the mask.
	* `dddMask` (String, default '(99) '): the default mask applied if `withDDD` is true.

For `type={'datetime'}` <br />
* *options={...}*
	* `format` (String, default DD/MM/YYYY HH:mm:ss): moment date format. It accepts the following:
		* DD/MM/YYYY HH:mm:ss
		* DD/MM/YYYY
		* MM/DD/YYYY
		* YYYY/MM/DD
		* HH:mm:ss
		* HH:mm
		* HH
		* *You can use all of dates with `-` instead of `/` if you want*

For `type={'custom'}` <br />
* *options={...}*
	* `mask` (String, default ''): your mask template.
		* `9`: accept digit.
		* `A`: accept alpha.
		* `S`: accept alphanumeric.
	* `validator` (Function, default returns true): the function use to validate value. Must return true if valid or false if invalid.
		* The function receives 2 parameters:
			* `value`: current value.
			* `settings`: current settings

Ex: 
```jsx
<TextInputMask type={'custom'} 
			   options={{ 
				   mask: 'AAAA-9',
				   validator: (value, settings) => {
					   //...
					   return true;
				   } 
				}} />
```

### Methods
`getElement()`: return the instance of *TextInput* component.
`isValid()`: if the value inputed is valid for the mask.
	* `type=datetime` and `value=99-99-9999` will return false (the date is invalid, the mask doesn`t match).
	* The following masks have validators: `datetime`, `cpf`, `cnpj`, `zip-code` length.


## Usage (TextMask)
Use this component to display Text with formated mask.
<br />
Import the lib: <br />
`import {TextMask} from 'react-native-masked-text'`

And now you can use the component:
``` jsx
<View style={styles.container}>
	<TextMask type={'zip-code'}
			  options={/* component options */} />
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

**Methods**
* static toMask(type, value, settings): mask a value.
	* `type` (String, required): the type of the mask (`cpf`, `datetime`, etc...)
	* `value` (String, required): the value to be masked
	* `settings` (Object, optional): if the mask type accepts options, pass it in the settings parameter
* static isValid(type, value, settings): validate if the mask and the value match.
	* `type` (String, required): the type of the mask (`cpf`, `datetime`, etc...)
	* `value` (String, required): the value to be masked
	* `settings` (Object, optional): if the mask type accepts options, pass it in the settings parameter

Ex:

``` jsx
import {MaskService} from 'react-native-masked-text'

var money = MaskService.toMask('money', '123', {
	unit: 'US$',
	separator: '.',
	delimiter: ','
});

// money -> US$ 1.23
```


# Changelog

# 1.0.0
* Adding datetime and cnpj masks.
* [Breaking Change] Refactoring MaskService.
* Separate mask handlers for better extensibility.
* Adding tests for all mask handlers.
* Refactoring Components for use new mask handlers.

# 0.3.6
* Fix vanilla-mask path on windows.