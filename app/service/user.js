/*
 * @Author: chenyuzhao.karl@gmail.com
 * @Date: 2019-05-16 13:35:44
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 15:23:16
 */

'use strict';

const BaseService = require('./base');

class UserService extends BaseService {

  constructor(ctx) {
    super(ctx);
    this.operator = this.ctx.model.user;
  }

}

module.exports = UserService;
