import BaseMask from './_base.mask';
var moment = require('moment');

const DATETIME_MASK_SETTINGS = {
	format: 'DD/MM/YYYY HH:mm:ss'
};

export default class DatetimeMask extends BaseMask {
    static getType() {
        return 'datetime';
    }

    getValue(value, settings) {
        let mergedSettings = this._getMergedSettings(settings);
		let mask = '';

		for(var i = 0; i < mergedSettings.format.length; i++) {
			mask += mergedSettings.format[i].replace( /[a-zA-Z]+/g, '9');
		}

		return this.getVMasker().toPattern(value, mask);
    }

    getRawValue(maskedValue, settings) {
        let mergedSettings = this._getMergedSettings(settings);
        return moment(maskedValue, mergedSettings.format, true);
    }

    validate(value, settings) {
        var maskedValue = this.getValue(value, settings);
        let mergedSettings = this._getMergedSettings(settings);
        var isValid = moment(maskedValue, mergedSettings.format, true).isValid();
        return isValid;
    }

    _getMergedSettings(settings) {
        return super.mergeSettings(DATETIME_MASK_SETTINGS, settings);
    }
}