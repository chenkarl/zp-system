/*
 * @Author: chenyuzhao.karl@gamil.com
 * @Date: 2019-05-16 10:50:17
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 15:28:44
 */

'use strict';

const BaseController = require('./base');

class LoginController extends BaseController {
  constructor(ctx) {
    super(ctx);
    this.operator = this.ctx.service.user;
  }
}

module.exports = LoginController;
