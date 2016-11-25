import BaseMask from './_base.mask';
import ToolBoxService from '../toolbox-service';

const MONEY_MASK_SETTINGS = {
	precision: 2,
	separator: ',',
	delimiter: '.',
	unit: 'R$',
	suffixUnit: '',
	zeroCents: false
};

export default class MoneyMask extends BaseMask {
    static getType() {
        return 'money';
    }

    getValue(value, settings) {
        let mergedSettings = ToolBoxService.mergeOptions(MONEY_MASK_SETTINGS, settings);
		return this.getVMasker().toMoney(value, mergedSettings);
    }

    validate(value, settings) {
        return true;
    }
}