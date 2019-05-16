/*
 * @Author: chenyuzhao.karl@gamil.com
 * @Date: 2019-05-14 20:48:46
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 15:34:03
 */

'use strict';

const Controller = require('egg').Controller;

/**
  * @description
  */
class BaseController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.operator = null;
  }

  /**
   * @description 创建文档
   */
  async create() {
    if (this.operator === null) {
      return null;
    }
    const { data } = this.ctx.request.body;
    const result = await this.operator.create(JSON.parse(data || ''));
    this.ctx.apiResult = result;
  }

  /**
   * @description 删除文档-逻辑
   */
  async remove() {
    if (this.operator === null) {
      return null;
    }
    const id = this.ctx.query.id;
    const result = await this.operator.remove(id);
    this.ctx.apiResult = result;
  }

  /**
   * @description 找回文档
   */
  async retrieve() {
    if (this.operator === null) {
      return null;
    }
    const id = this.ctx.query.id;
    const result = await this.operator.retrieve(id);
    this.ctx.apiResult = result;
  }

  /**
   * @description 删除文档-物理
   */
  async delete() {
    if (this.operator === null) {
      return null;
    }
    const id = this.ctx.query.id;
    const result = await this.operator.delete(id);
    this.ctx.apiResult = result;
  }

  /**
   * @description 更新文档
   */
  async update() {
    if (this.operator === null) {
      return null;
    }
    const { id, doc } = this.ctx.body;
    const result = await this.operator.update(id, JSON.parse(doc || '{}'));
    this.ctx.apiResult = result;
  }

  /**
   * @description 获取文档列表
   */
  async list() {
    if (this.operator === null) {
      return null;
    }
    let { pageIndex, pageSize, where, sort, filter, search } = this.ctx.body;
    where = JSON.parse(where || '{}');
    sort = JSON.parse(sort || '{}');
    const { count, list } = await this.operator.list(pageIndex, pageSize, where, sort, filter, search);
    this.ctx.apiResult.data = { count, list };
  }

  /**
   * @description 获取文档详情
   */
  async detail() {
    if (this.operator === null) {
      return null;
    }
    const id = this.ctx.query.id;
    const result = await this.operator.detail(id);
    this.ctx.apiResult = result;
  }
}

module.exports = BaseController;
