/*
 * @Author: chenyuzhao.karl@gmail.com
 * @Date: 2019-05-16 11:01:55
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 11:23:00
 */

'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const BaseSchema = require('../base')(app);

  /**
   * @description 用户信息
   * @param {String} name 姓名
   * @param {String} pwd 密码-md5加密
   * @param {String} email 邮箱
   * @param {String} phoneNumber 手机号
   * @param {String} headpic 头像
   * @param {BaseSchema} docInfo  文档基本信息
   */
  const UserSchema = new Schema({
    name: {
      type: String,
    },
    pwd: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    headpic: {
      type: String,
    },
    docInfo: {
      type: BaseSchema,
    },
  });

  return mongoose.model('User', UserSchema);
};
