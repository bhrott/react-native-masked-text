# Changelog

## Unreleased

## [1.13.0] - 2019-08-13

### Chore

- [BREAKING CHANGE] Migrating from `moment` to `date-and-time`.
    - Thanks to [Marcin Krysiak](https://github.com/marcinkrysiak1979) for contributing!

### Fix

- [#184](https://github.com/benhurott/react-native-masked-text/issues/184) TextInputMask doesnt render mask correctly when type change.
    - Thanks to [Rodrigo Weber](https://github.com/RodrigoAWeber) for contributing!

### Docs

- Fixing documentaion link.
    - Thanks to [Luan Curti](https://github.com/luancurti) for contributing!

## [1.12.5] - 2019-08-03

### Fix

- [#176](https://github.com/benhurott/react-native-masked-text/issues/176) Deprecation Warning: componentWillReceiveProps
    - Thanks to [Maksim Markelov](https://github.com/mmarkelov) for contributing!

### Chore

- Use find instead of filter on mask resolver.
    - Thanks to [rodineijf](https://github.com/rodineijf) for contributing!

## [1.12.4] - 2019-07-12

### Fix

- [#170](https://github.com/benhurott/react-native-masked-text/issues/170): fixing typing for includeRawValueInChangeText.
    - thanks to [Sergei Butko](https://github.com/svbutko) for contribution.
    - thanks to [Agustin G.](https://github.com/agustingabiola) for reporting.
- [#173](https://github.com/benhurott/react-native-masked-text/issues/173): fixing initial value for money field.
    - thanks to [Maksim Markelov](https://github.com/mmarkelov) for reporting.

## [1.12.3] - 2019-05-17

### Fix

- Fixing [#162](https://github.com/benhurott/react-native-masked-text/issues/162) initial value when mask is updated. (thanks to [Alessandro Sales](https://github.com/alessandrosales) for reporting)

## [1.12.2] - 2019-04-22

### Refactor

- Performance improvements
  - The `state` control was removed from the text mask component, using only the props to handle the mask.
  - We changed the base text mask from `Component` to `PureComponent`.
  - BREAKING: the `value` and `onChangeText` are now **required** props.
  - These changes probably will fix (need to check with the reporters):
    - [Wrong input inserting unwanted text #146](https://github.com/benhurott/react-native-masked-text/issues/146)
    - [Flickering of uncontrolled input #136](https://github.com/benhurott/react-native-masked-text/issues/136)

## [1.12.1] - 2019-04-09

### Fixed

- Fixing npm install error (https://github.com/benhurott/react-native-masked-text/issues/140).

## [1.12.0] - 2019-04-07

### Added

- Adding `rawText` in `onChangeText`. (Thanks to [questionablequestion](https://github.com/questionablequestion))

### Fixed

- Fixing return type of `getRawValue` in `ts definition`. (Thanks to [gabelerner](https://github.com/gabelerner))

### Changed

- Improving component initialization. (Thanks to [rsouthgate](https://github.com/rsouthgate))

## [1.11.1] - 2019-03-05

### Fixed

- Remove characters in the middle of the mask (Thanks to [rsouthgate](https://github.com/rsouthgate) for the great contribution!)
  - Fixes [#128](https://github.com/benhurott/react-native-masked-text/issues/128) and [#35](https://github.com/benhurott/react-native-masked-text/issues/35)

## [1.11.0] - 2019-02-23

### Added

- Adding `maskType` to `cel-phone` with options: `BRL` and `INTERNATIONAL`.

### Changed

- New documentation in `README`.

### Removed

- [BREAKING CHANGE] The `zeroCents` option was removed from `money` mask, if you want to not show the cents, use the `precision: 0`.


## [1.10.1] - 2019-01-07

### Fixed

- Fixing `issuer` in ts file. (Thanks to [Gabe Lerner](https://github.com/gabelerner))

## [1.10.0] - 2019-01-06

### Added

- Credit Card Mask: adding support for `diners` and `amex`. (Thanks to [Marin Bezhanov](https://github.com/mbezhanov))

### Fixed

- [#107](https://github.com/benhurott/react-native-masked-text/issues/107): Props missing - TypeScript map out of date.
- [#115](https://github.com/benhurott/react-native-masked-text/issues/115): setNativeProps is not a function

## [1.9.2] - 2018-10-06

### Fixed

-   [#95](https://github.com/benhurott/react-native-masked-text/issues/95): Number value cause errors into only-numbers mask (thanks to [dfsilva](https://github.com/dfsilva) for reporting)
-   [#96](https://github.com/benhurott/react-native-masked-text/issues/96): cel-phone mask is not changing properly. (thanks to [jgfidelis](https://github.com/jgfidelis) for reporting)

## [1.9.1] - 2018-09-09

-   Fix [#92](https://github.com/benhurott/react-native-masked-text/issues/92): Unable to resolve module ./masks in v1.9.0 (thanks to [ahce](https://github.com/ahce) for reporting)

## [1.9.0] - 2018-09-08

## Changed

-   Custom Mask: now all the masks use the core from Custom Mask.
-   Adding some docs about how to use methods.

### PRs

-   [74 - Updated Typescript definition file](https://github.com/benhurott/react-native-masked-text/pull/74). (thanks to [iiandrade](https://github.com/iiandrade))
-   [80 - TypeScript support for custom mask options](https://github.com/benhurott/react-native-masked-text/pull/80). (thanks to [enagorny](https://github.com/enagorny))
-   [88 - Moved typings dependencies to devDependencies](https://github.com/benhurott/react-native-masked-text/pull/88). (thanks to [emiyake](https://github.com/emiyake))

## 1.7.2

-   Fixing [ISSUE#79](https://github.com/benhurott/react-native-masked-text/issues/79). (thanks to [herlan-evocorp](https://github.com/herlan-evocorp))

## 1.7.1

-   Updating moment lib.

## 1.7.0

-   Adding `ts definitions`. (thanks to [iiandrade](https://github.com/iiandrade))
-   Adding `toRawValue` method to MaskService. (thanks to [fabioh8010](https://github.com/fabioh8010))
-   Replace old legacy ref string by the new callback. (thanks to [Yamilquery](https://github.com/Yamilquery))

## 1.6.5

-   Fixing validation for CPF and CNPJ when empty string is inputed. (thanks to [gabuael](https://github.com/gabuael))

## 1.6.4

-   Fixing wrong format when use money mask and values with only one decimal place (`1.9`) (thanks to [Pablo](https://github.com/rochapablo)).

## 1.6.3

-   Fixing moment version (thanks to [Edward Coleridge Smith](https://github.com/edcs))
-   Adding pre-builded lib to improve build phase (thanks to [Giorgi Bagdavadze](https://github.com/notgiorgi))

## 1.6.2

-   Fixing custom mask when removing value in middle of the text. (thanks to [Aleksandr Kompaniets](https://github.com/Oxyaction))
    _ KNOW ISSUE: the custom mask is not allowing user to input white spaces for `_` translation temporarily.

## 1.6.1

-   Fixing duplicated custom text input component. (thanks to [Pablo](https://github.com/rochapablo))

## 1.6.0

-   Add compatibility to [react-native-textinput-effects](https://github.com/halilb/react-native-textinput-effects) by using `customTextInputProps` (thanks to [Pablo](https://github.com/rochapablo))

## 1.5.3

-   Fix suffix backspace (thanks to [Thomas Kekeisen](https://github.com/blaues0cke))
-   Fix last character on custom mask (thanks to [Daniel Maly](https://github.com/DanielMaly))

## 1.5.2

-   Adding `keyboardType` to custom mask. (thanks to [Nurbek Abulgazin](https://github.com/nurbek-ab))

## 1.5.1

-   Adding `tinymask` to fix some custom mask issues.

## 1.5.0

-   Adding new and powerfull `custom` engine mask \m/.

## 1.4.0

-   Adding `customTextInput` to allow other inputs instead native TextInput. (thanks to [Hellon Canella](https://github.com/helloncanella))

## 1.3.4

-   Remove default value from mask to allow placeholder on text-input (thanks to [Cuong Hoang](https://github.com/cuonghv91)). \* Please, caution. This can cause some runtime breaking if you update to this version.

## 1.3.3

-   Update dependencies (thanks to [Vlad-Zhukov](https://github.com/Vlad-Zhukov))

## 1.3.2

-   Fix: ignoring Jet Brains ide files (thanks to [Vlad-Zhukov](https://github.com/Vlad-Zhukov))

## 1.3.1

-   Performance: adding check if the next value to be applied to the mask is equal as actual and prevent state change.

## 1.3.0

-   Feat: now you can check and prevent input text on `TextInputMask` using `checkText` prop.

## 1.2.2

-   Fix: fixing es2015 preset (thanks to [vagnercsouza](https://github.com/vagnercsouza), [barakcoh](https://github.com/barakcoh), Marvin Santos)

## 1.2.1

-   Fix: fixing white space after unit on money mask.

## 1.2.0

-   Adding `getRawValue`.

## 1.1.1

-   Fixing toolbox-service reference (thanks to [ziftinpeki](https://github.com/ziftinpeki)).

## 1.1.0

-   Adding credit-card mask.
-   Refactoring base mask to contain helpfull functions.

## 1.0.0

-   Adding datetime and cnpj masks.
-   [Breaking Change] Refactoring MaskService.
-   Separate mask handlers for better extensibility.
-   Adding tests for all mask handlers.
-   Refactoring Components for use new mask handlers.

## 0.3.6

-   Fix vanilla-mask path on windows.
