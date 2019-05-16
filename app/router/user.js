/*
 * @Author: chenyuzhao.karl@gmail.com
 * @Date: 2019-05-16 15:26:24
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 15:34:41
 */

'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/user/list', controller.user.list);
  router.post('/user/create', controller.user.create);
  router.get('/user/detail', controller.user.detail);
};
