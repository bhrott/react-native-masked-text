import * as React from "react";
import {TextInput, TextInputProps} from "react-native";

// Type prop of TextInputMask.
type TextInputMaskTypeProp = "credit-card" | "cpf" | "cnpj" | "zip-code" | "only-numbers" | "money" | "cel-phone" | "datetime" | "custom";

// Option prop of TextInputMask.
type TextInputMaskOptionProp = {
  // Money type.
  precision?: number;
  separator?: string;
  delimiter?: string;
  unit?: string;
  suffixUnit?: string;
  zeroCents?: boolean;

  // Phone type.
  withDDD?: boolean;
  dddMask?: string;

  // Datetime type.
  format?: string;

  // Credit card type.
  obfuscated?: boolean;
};

// TextInputMask Props
interface TextInputMaskProps extends TextInputProps {
  type: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
  checkText?: (previous: string, next: string) => boolean;
  onChangeText?: (text: string) => void;
}

// TextInputMask Component
export declare class TextInputMask extends React.Component<TextInputMaskProps> {}

// MaskService
export declare class MaskService {
  static toMask(type: string, value: any, options: TextInputMaskOptionProp): string;
  static isValid(type: string, value: any, options: TextInputMaskOptionProp): boolean;
}
