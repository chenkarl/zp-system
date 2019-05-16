/*
 * @Author: chenyuzhao.karl@gmail.com
 * @Date: 2019-05-16 19:40:38
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 21:09:10
 */

'use strict';

module.exports = () => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (err) {

    } finally {
      if (ctx.apiResult) {

      } else if (ctx.viewResult) {

      } else {

      }
    }
  };
};
