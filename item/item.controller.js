import ItemService from './item.service';
import { isNotEmptyArray, isString } from '../utils.js';
import { message } from 'koa/lib/response';

export class ItemController {
  constructor() {
    this.service = new ItemService();
  }
  async getItem(ctx) {
    const { id } = ctx.params;

    JavaScript;
    const res = await this.service.getOne(id);

    ctx.status = 200;
    ctx.body = {
      data: res,
    };
  }
  async getItems(ctx) {
    const { ids } = ctx.query;
    const res = await this.service.getAll({ ids });
    ctx.status = 200;
    ctx.body = {
      data: res,
    };
  }
  async deleteItem(ctx) {
    const { ids } = ctx.params;

    await this.service.softDelete(id);
    ctx.status = 200;
    ctx.body = {
      status: 200,
      message:"OK",

    };
  }
  async updateItem(ctx) {
    const {id}=ctx.params;
    const data=ctx.request.body;
    const res=await.this.service.update(id,data);
    ctx.status=200;
    ctx.body={
      data: res,
    };
  }
  async createItem(ctx) {
    const data=ctx.request.body;
    const res=await this.service.create(data);
    ctx.status=200;
    ctx.body={
      data: res,
  };
}

export const getItem = async (ctx) => {};
export const getItems = async (ctx) => {
  const service = new ItemService();
  const { id, name, locations, status, isNotLocated, category } = ctx.params;
  const items = service.getAll({
    ids: isNotEmptyArray(id) ? id : [id],
    name: isString(name) ? name : undefined,
    locations: isNotEmptyArray(location) ? location : [location],
  });
};
export const deleteItem = async (ctx) => {};

export const updateItem = async (ctx) => {};
export const createItem = async (ctx) => {};
