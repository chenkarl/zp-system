/*
 * @Author: chenyuzhao.karl@gamil.com
 * @Date: 2019-05-10 11:17:17
 * @Last Modified by: chenyuzhao.karl@gamil.com
 * @Last Modified time: 2019-05-10 21:07:51
 */

'use strict';

const Service = require('egg').Service;
const mongoose = require('mongoose');
const underscore = require('underscore');

class BaseService extends Service {

  constructor(ctx) {
    super(ctx);
    this.operator = null;
    this.userName = '';
    this.mongoose = mongoose;
    this.logger = this.ctx.logger;

    this.searchField = [];
  }

  /**
   * @description 新建文档
   * @param {Object} data 文档数据
   */
  async create(data) {
    this.logger.debug('[document create] data:{0}', data);
    if (this.operator === null) {
      return null;
    }
    try {
      const doc = await this.operator.create(data);
      this.logger.debug('[document create success] doc:{0}', doc);
      return {
        code: 0,
        msg: '创建成功',
        data: doc,
      };
    } catch (err) {
      this.logger.info('[document create exception] data:{0},err:{1}', data, err);
      return {
        code: -1001,
        msg: '创建异常',
        data: err,
      };
    }
  }

  /**
   * @description 文档删除-逻辑
   * @param {String} id 文档ID
   */
  async remove(id) {
    if (this.operator === null) {
      return null;
    }
    this.logger.info('[document remove success] id:{0}', id);
    return await this.operator.update({ _id: id }, { $set: { 'docInfo.state': false } });
  }

  /**
   * @description 文档找回-必须是逻辑删除的文档
   * @param {String} id 文档ID
   */
  async getback(id) {
    if (this.operator === null) {
      return null;
    }
    const result = await this.operator.update({ _id: id }, { $set: { 'docInfo.state': true } });
    if (result.ok) {
      this.logger.debug('[document getback success] id:{0}', id);
    }
    this.logger.info('[document getback fail] id:{0}', id);
    return result;
  }
  /**
   * @description 文档删除-物理
   * @param {String} id 文档ID
   */
  async delete(id) {
    if (this.operator === null) {
      return null;
    }
    this.logger.info('[document delete success] id:{0}', id);
    return await this.operator.deleteOne('_id', id);
  }

  /**
   * @description 文档更新
   * @param {String} id 文档ID
   * @param {Object} upDoc 更新内容
   */
  async updateDoc(id, upDoc) {
    try {
      const originDoc = await this.operator.findById(id);
      if (!originDoc) {
        this.logger.info('[document update] id:{0},err:document not found');
        return {
          code: -1,
          msg: '文档不存在',
        };
      }
      for (const key in upDoc) {
        if ((key in originDoc) && !underscore.isEqual(originDoc[key], upDoc[key])) {
          originDoc[key] = upDoc[key];
        }
      }
      const result = this.operator.update({ _id: id }, originDoc);
      if (result.ok) {
        const doc = this.operator.findById(id);
        this.logger.debug('[document update success] id:{0},upDoc:{1},doc:{2}', id, upDoc, doc);
        return {
          code: 0,
          msg: '更新成功',
          data: doc,
        };
      }
      this.logger.info('[document update fail] id:{0},upDoc:{1},result:{2}', id, upDoc, result);
      return {
        code: -1001,
        msg: '更新失败',
        data: result,
      };
    } catch (err) {
      this.logger.info('[document update exception] id:{0},data:{1},err:{2}', id, upDoc, err);
      return {
        code: -1001,
        msg: '更新异常',
        data: err,
      };
    }
  }

  /**
   * @description 文档列表
   * @param {Number} pageIndex 页码
   * @param {Number} pageSize 每页文档数量
   * @param {Object} where 查询条件
   * @param {Object} sort 排序条件
   * @param {Object} filter 指定过滤字段
   * @param {String} search 指定搜索字段
   * @param {Object} option 扩展参数
   */
  async list(pageIndex, pageSize, where, sort, filter, search, option) {
    if (this.operator === null) {
      return null;
    }
    pageIndex = Math.abs(parseInt(pageIndex, 0)) || 0;
    pageSize = Math.abs(parseInt(pageSize, 0)) || 15;

    // search 条件处理
    if (search && this.searchField.length > 0) {
      const $reg = { $regex: new RegExp(search, 'i') };
      where.$or = where.$or || [];
      this.searchField.forEach(key => {
        const reg = {};
        if (typeof key === 'object') {

        } else {
          reg[key] = $reg;
          where.$or.push(reg);
        }
      });
    }

    let promiseList = this.operator.find(where, filter).sort(sort).skip(pageIndex * pageSize);
    const promiseCount = this.operator.count(where);

    if (option && 'populate' in option) {
      for (const pop in option.populate) {
        promiseList = promiseList.populate(pop);
      }
    }
    const [ count, list ] = await Promise.all([ promiseCount, promiseList ]);
    return { count, list };
  }
}

module.exports = BaseService;
