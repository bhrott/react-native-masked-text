# Changelog

## Unreleased

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
