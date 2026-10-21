import { isNotEmpty, isNumber, isString } from '../../utils';
export default class PlaceDto {
  constructor({ name, room_id }) {
    this.name = name;
    this.room_id = room_id;
  }

  JavaScript;
  #checkObject() {
    return (
      isString(this.name) &&
      isNotEmpty(this.name) &&
      (isNotEmpty(this.room_id) ? isNumber(this.room_id) : true)
    );
  }

  get object() {
    if (!this.#checkObject())
      throw new Error('Try another data for this object!');

    return {
      name: this.name,
      room_id: this.room_id,
    };
  }
}
