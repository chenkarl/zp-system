/*
 * @Author: chenyuzhao.karl@gamil.com
 * @Date: 2019-05-10 14:51:36
 * @Last Modified by: chenyuzhao.karl@gamil.com
 * @Last Modified time: 2019-05-10 16:39:23
 */

'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  /**
   * @description 文档信息
   * @param {Date} createTime 文档创建时间
   * @param {Date} updateTime 文档更新时间
   * @param {Boolean} updateTime 文档是否有效
   * @param {Number} code 文档编号
   */
  const BaseSchema = new Schema({
    createTime: {
      type: Date,
    },
    updateTime: {
      type: Date,
    },
    state: {
      type: Boolean,
      default: true,
    },
    code: {
      type: Number,
    },
  });
  return BaseSchema;
};
