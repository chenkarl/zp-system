/*
 * @Author: chenyuzhao.karl@gamil.com
 * @Date: 2019-05-09 14:37:54
 * @Last Modified by: chenyuzhao.karl@gmail.com
 * @Last Modified time: 2019-05-16 11:16:39
 */
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const BaseSchema = require('../base')(app);
  /**
   * @description 个人信息
   * @param {String} name 姓名
   * @param {String} sex  性别
   * @param {String} age  年龄
   * @param {String} height 身高
   * @param {String} weight 体重
   * @param {String} infectiousDisease 传染病
   * @param {String} hobby 爱好
   * @param {String} politicsStatus 政治面貌
   * @param {String} certificateType 证件类型
   * @param {String} certificateNumber 证件号码
   * @param {String} phoneNumber 手机号码
   * @param {String} emailAddress 邮箱
   * @param {String} qqNumber qq号
   * @param {String} weChatNumber 微信号
   * @param {String} weboLink 微博链接
   * @param {String} githubLink github链接
   * @param {String} blogLink 博客地址
   * @param {String} birthday 生日
   * @param {String} marriage 婚姻状况
   * @param {String} nation 民族
   * @param {String} nativePlace 籍贯
   * @param {String} religion 宗教信仰
   * @param {String} educationBackground 学历
   * @param {String} school 学校
   * @param {String} major 专业
   * @param {String} contactPeople 联系人
   * @param {String} contactPeopleRelationship 联系人关系
   * @param {String} contactPeoplePhoneNumber 联系人电话
   * @param {String} photograph 照片
   */
  const PersonInformationSchema = new Schema({
    id: {
      type: Number,
    },
    value: {
      name: {
        type: String,
      },
      sex: {
        type: String,
      },
      age: {
        type: String,
      },
      height: {
        type: String,
      },
      weight: {
        type: String,
      },
      infectiousDisease: {
        type: String,
      },
      hobby: {
        type: String,
      },
      politicsStatus: {
        type: String,
      },
      certificateType: {
        type: String,
      },
      certificateNumber: {
        type: String,
      },
      photograph: {
        type: String,
      },
      phoneNumber: {
        type: String,
      },
      emailAddress: {
        type: String,
      },
      qqNumber: {
        type: String,
      },
      weChatNumber: {
        type: String,
      },
      weboLink: {
        type: String,
      },
      githubLink: {
        type: String,
      },
      blogLink: {
        type: String,
      },
      birthday: {
        type: String,
      },
      marriage: {
        type: String,
      },
      nation: {
        type: String,
      },
      nativePlace: {
        type: String,
      },
      religion: {
        type: String,
      },
      educationBackground: {
        type: String,
      },
      school: {
        type: String,
      },
      major: {
        type: String,
      },
      contactPeople: {
        type: String,
      },
      contactPeopleRelationship: {
        type: String,
      },
      contactPeoplePhoneNumber: {
        type: String,
      },
    },
  });
  /**
   * @description 简历信息
   * @param {PersonInformationSchema} PersonInformation 个人信息
   * @param {Number} type 简历类型 102 社招 101 校招
   * @param {Number} isSubmit 是否提交 1 已提交 0 未提交
   * @param {BaseSchema} docInfo 文档信息
   */
  const ResumeSchema = new Schema({
    PersonInformation: {
      type: PersonInformationSchema,
    },
    type: {
      type: Number,
      index: true,
    },
    isSubmit: {
      type: Number,
    },
    docInfo: {
      type: BaseSchema,
    },
  });
  return mongoose.model('Resume', ResumeSchema);
};
