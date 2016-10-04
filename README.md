# react-native-text-mask

WORK IN PROGRESS!

This repository is under development. See you later =).

This is a simple masked text (normal text and input text) component for React-Native.

Thanks to [vanilla-masker](https://github.com/BankFacil/vanilla-masker) =).

## Supported Versions
We develop this lib on the following versions of react-native:
* react: 15.3.2 or higher
* react-native: 0.34.1 or higher

## Install
`npm install react-native-masked-text --save`

## Usage (TextInputMask)
After install, import the lib: <br />
`import {TextInputMask} from 'react-native-text-mask'`

And now you can use the component:
```
<View style={styles.container}>
    <TextInputMask style={styles.input} type={'zip-code'}/>
</View>
```

### Props
* **type**
	* *cpf*: use the mask `999.999.999-99` and `numeric` keyboard.
	* *zip-code*: use the mask `99999-999` and `numeric` keyboard.
	* *only-numbers*: accept only numbers on field with `numeric` keyboard.
	* *money*: use the mask `R$ 0,00` on the field with `numeric` keyboard. It accepts custom properties (see later in this doc).
	* *cel-phone*: use the mast `(99) 9999-9999` or `(99) 99999-9999` (changing automaticaly by length).
	* *custom*: use your custom mask (see custom props later in this doc).
* **TextInput Props**
	* You can use the native props of TextInput, with this in mind:
		* onChangeText is intercepted by component.
		* value is intercepted by component.
		* if you pass keyboardType, it will override the keyboardType of masked component.


**Custom Props** <br />
*type={'money'}* <br />
* `precision` (Number, default 2): the decimal places.
* `separator` (String, default ','): the decimal separator.
* `delimiter` (String, default '.'): the thousand separator.
* `unit`: (String, default 'R$'): the prefix text.
* `suffixUnit` (String, default ''): the suffix text.
* `zeroCents` (Boolean, default false): if must show cents.

*type={'custom'}* <br />
* `mask` (String, default ''): your mask template.
	* `9`: accept digit.
	* `A`: accept alpha.
	* `S`: accept alphanumeric.


##Roadmap
* Masked raw Text (for display only)
* Phone number (for other contries)
* Possibility to change custom map on text-change.
