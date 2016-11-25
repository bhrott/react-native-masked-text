import BaseMask from './_base.mask';
var moment = require('moment');

const DATETIME_MASK_SETTINGS = {
	format: 'dd-MM-yyyy'
};


export default class DatetimeMask extends BaseMask {
    static getType() {
        return 'datetime';
    }

    getValue(value, settings) {
        let mergedSettings = ToolBoxService.mergeOptions(DATETIME_MASK_SETTINGS, settings);
		let mask = '';

		for(var i = 0; i < mergedSettings.format.length; i++) {
			mask += mergedSettings.format[i].replace( /[a-zA-Z]+/g, '9');
		}

		return this.getVMasker().toPattern(value, mask);
    }

    validate(value, settings) {
        return true;
    }
}