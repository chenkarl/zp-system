/*
 * @Author: chenyuzhao.karl@gamil.com
 * @Date: 2019-05-14 20:48:46
 * @Last Modified by: chenyuzhao.karl@gamil.com
 * @Last Modified time: 2019-05-14 21:01:59
 */

'use strict';

const Controller = require('egg').Controller;

/**
  * @description
  */
class BaseController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  /**
      * @description 创建文档
      */
  async create() {
    const { data } = this.ctx.request.body;
    const result = await this.operator.create(JSON.parse(data || ''));
    this.ctx.apiResult = result;
  }

  /**
      * @description 删除文档-逻辑
      */
  async remove() {
    const id = this.ctx.query.id;
    const result = await this.operator.remove(id);
    this.ctx.apiResult = result;
  }

  /**
      * @description 找回文档
      */
  async retrieve() {

  }

  /**
      * @description 删除文档-物理
      */
  async delete() {

  }

  /**
      * @description 获取文档列表
      */
  async list() {

  }

  /**
      * @description 获取文档详情
      */
  async detail() {

  }
}

module.exports = BaseController;
