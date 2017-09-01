import * as Masks from './masks';

const maskKeys = Object.keys(Masks);

export default class MaskResolver {
  static resolve(type) {
    const maskKey = maskKeys.filter(m => {
      const handler = Masks[m];
      return handler && handler.getType && handler.getType() === type;
    })[0];

    const handler = Masks[maskKey];

    if (!handler) {
      throw new Error('Mask type not supported.');
    }

    return new handler();
  }
}
