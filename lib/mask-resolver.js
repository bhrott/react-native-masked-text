import {MaskService} from './mask-service';

let maskService = new MaskService();

const MASK_RESOLVERS = {
	'cpf': {
		keyboardType: 'numeric',
		handler: maskService.toCpf
	},
	'zip-code': {
		keyboardType: 'numeric',
		handler: maskService.toZipCode
	},
	'only-numbers': {
		keyboardType: 'numeric',
		handler: maskService.toNumber
	},
	'cel-phone': {
		keyboardType: 'numeric',
		handler: maskService.toCelPhone
	},
	'money': {
		keyboardType: 'numeric',
		handler: maskService.toMoney
	},
	'custom': {
		keyboardType: 'default',
		handler: maskService.toCustom
	}
}

export class MaskResolver {
	static resolve(type) {
		return MASK_RESOLVERS[type];
	}
}
