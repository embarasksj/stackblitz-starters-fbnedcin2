import { isNotEmpty, isNumber, isString } from '../../utils.js';

export default class FloorDto {
  constructor({ name, structure_id }) {
    this.name = name;
    this.structure_id = structure_id;
  }
  #checkObject() {
    return (
      isString(this.name) &&
      isNotEmpty(this.name) &&
      isString(this.structure_id) &&
      isNotEmpty(this.structure_id)
    );
  }

  get object() {
    if (!this.#checObject())
      throw new Error(`Try  another data for this jbject!`);
    return {
      name: this.name,
      structure_id: this.structure_id,
    };
  }
}
