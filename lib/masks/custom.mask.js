import BaseMask from './_base.mask';

const DEFAULT_TRANSLATION = {
	'9': function (val) {
		return val.replace(/[^0-9]+/g, '');
	},
	'A': function (val) {
		return val.replace(/[^a-zA-Z]+/g, '');
	},
	'S': function (val) {
		return val.replace(/[^a-zA-Z0-9]+/g, '');
	},
	'*': function (val) {
		return val
	}
}

var invalidValues = [null, undefined, ''];

export default class CustomMask extends BaseMask {
	static getType() {
		return 'custom';
	}

	getKeyboardType() {
		return "default";
	}

	getValue(value, settings) {
		let { mask } = settings;
		let translation = this.mergeSettings(DEFAULT_TRANSLATION, settings.translation);

		var result = '';

		const maskSize = mask.length;
		const valueSize = value.length;

		var maskResolved = 0;
		var valueResolved = 0;

		while (maskResolved < maskSize && valueResolved < valueSize) {
			const valueChar = value[valueResolved];
			const maskChar = mask[maskResolved];

			if (valueChar === maskChar) {
				result += valueChar;
				maskResolved++;
				valueResolved++;
				continue;
			}

			const handler = translation[maskChar];

			if (!handler) {
				result += maskChar;
				maskResolved++;
				continue;
			}

			var masked = handler(valueChar);
			if (invalidValues.indexOf(masked) < 0) {
				result += masked
				maskResolved++
			}
			valueResolved++
		}

		return result;
	}

	getRawValue(maskedValue, settings) {
		if (!!settings && settings.getRawValue) {
			return settings.getRawValue(maskedValue, settings);
		}

		return maskedValue;
	}

	validate(value, settings) {
		if (!!settings && settings.validator) {
			return settings.validator(value, settings);
		}

		return true;
	}
}
