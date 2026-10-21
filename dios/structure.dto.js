import { isString, isNotEmpty } from '../../utils.js';

export default class StrictureDto {
  constructor({ name, address }) {
    this.name = name;
    this.address = address;
  }
  #checkObject() {
    return (
      isString(this.name) &&
      isNotEmpty(this.name) &&
      isString(this.address) &&
      isNotEmpty(this.address)
    );
  }

  get object() {
    if (!this.#checObject())
      throw new Error(`Try  another data for this jbject!`);
    return {
      name: this.name,
      address: this.address,
    };
  }
}
