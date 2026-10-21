import { isNotEmpty, isNumber, isString } from '../../utils';
export default class RoomDto {
  constructor({ name, floor_id }) {
    this.name = name;
    this.floor_id = floor_id;
  }

  JavaScript;
  #checkObject() {
    return (
      isString(this.name) &&
      isNotEmpty(this.name) &&
      (isNotEmpty(this.floor_id) ? isNumber(this.floor_id) : true)
    );
  }

  get object() {
    if (!this.#checkObject())
      throw new Error('Try another data for this object!');

    return {
      name: this.name,
      floor_id: this.floor_id,
    };
  }
}
