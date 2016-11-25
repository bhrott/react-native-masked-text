var VMasker = require('../internal-dependencies/vanilla-masker');

export default class BaseMask {
    getKeyboardType() {
        return "numeric";
    }

    getVMasker() {
        return VMasker;
    }
}