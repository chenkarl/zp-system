/*
 * @Author: chenyuzhao.karl@gamil.com
 * @Date: 2019-05-10 11:15:34
 * @Last Modified by: chenyuzhao.karl@gamil.com
 * @Last Modified time: 2019-05-10 11:15:54
 */

'use strict';

const Controller = require('egg').Controller;

class ResumeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = ResumeController;
