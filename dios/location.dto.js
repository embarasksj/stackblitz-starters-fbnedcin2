import { isNotEmpty, isNumber, isString } from '../../utils';
export default class LocationDto {
  constructor({ name, place_id }) {
    this.name = name;
    this.place_id = place_id;
  }

  JavaScript;
  #checkObject() {
    return (
      isString(this.name) &&
      isNotEmpty(this.name) &&
      (isNotEmpty(this.place_id) ? isNumber(this.place_id) : true)
    );
  }

  get object() {
    if (!this.#checkObject())
      throw new Error('Try another data for this object!');

    return {
      name: this.name,
      place_id: this.place_id,
    };
  }
}
