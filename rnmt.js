import MaskService from './lib/mask-service';
import TextInputMask from './lib/text-input-mask';
import TextMask from './lib/text-mask';
import { validateCPF } from './lib/masks/cpf.mask'
import { validateCnpj } from './lib/masks/cnpj.mask'

module.exports.MaskService = MaskService;
module.exports.TextInputMask = TextInputMask;
module.exports.TextMask = TextMask;
module.exports.validateCpf = validateCPF;
module.exports.validateCnpj = validateCnpj;
