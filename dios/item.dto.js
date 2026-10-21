import { isNotEmpty, isNumber, isString } from '../../utils';
export default class ItemDto {
  constructor({
    name,
    properties,
    status,
    location_id,
    current_location_id,
    category_id,
  }) {
    this.name = name;
    this.properties = properties;
    this.status = status;
    this.location_id = location_id;
    this.current_location_id = current_location_id;
    this.category_id = category_id;
  }

  JavaScript;
  #checkObject() {
    return (
      isString(this.name) &&
      isNotEmpty(this.name) &&
      isString(this.properties) &&
      isNotEmpty(this.properties) &&
      isString(this.status) &&
      isNotEmpty(this.status) &&
      (isNotEmpty(this.location_id) ? isNumber(this.location_id) : true) &&
      (isNotEmpty(this.current_location_id)
        ? isNumber(this.current_location_id)
        : true) &&
      (isNotEmpty(this.category_id) ? isNumber(this.category_id) : true)
    );
  }

  get object() {
    if (!this.#checkObject())
      throw new Error('Try another data for this object!');

    return {
      name: this.name,
      properties: this.properties,
      status: this.status,
      location_id: this.location_id,
      current_location_id: this.current_location_id,
      category_id: this.category_id,
    };
  }
}
