/*
 * @Author: chenyuzhao.karl@gmail.com
 * @Date: 2019-05-16 15:23:28
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 15:25:16
 */

'use strict';

const BaseController = require('./base');

class UserController extends BaseController {
  constructor(ctx) {
    super(ctx);
    this.operator = this.ctx.service.user;
  }
}

module.exports = UserController;
