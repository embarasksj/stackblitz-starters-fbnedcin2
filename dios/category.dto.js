import { isNotEmpty, isString } from '../../utils';
export default class CategoryDto {
  constructor({ name }) {
    this.name = name;
  }

  #checkObject() {
    return isNotEmpty(this.name) && isString(this.name);
  }

  get object() {
    if (!this.#checkObject())
      throw new Error('Try another data for this object!');

    return {
      name: this.name,
    };
  }
}
