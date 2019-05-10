# zp-system
招聘系统重构

## 系统构成

投递站
简历填写

管理站
简历查看
数据统计

## 系统语言
Nodejs

## 框架
Egg

## 特点
环节可配置与自定义
简历使用适配器读取，兼容旧数据
配置化，状态标签等从配置文件读取，具有层级结构

模块化-权限系统，数据统计，参数验证

## 3.5系统存在问题
1、日志记录

## 迁移方法
旧数据库，中间缓存，新数据库
>平滑迁移数据，迁移过程不停机，保证系统持续服务

追日志法，五个步骤：

（1）服务进行升级，记录“对旧库上的数据修改”的日志

（2）研发一个数据迁移小工具，进行数据迁移

（3）研发一个读取日志小工具，追平数据差异

（4）研发一个数据比对小工具，校验数据一致性

（5）流量切到新库，完成平滑迁移


双写法，四个步骤：

（1）服务进行升级，记录“对旧库上的数据修改”进行新库的双写

（2）研发一个数据迁移小工具，进行数据迁移

（3）研发一个数据比对小工具，校验数据一致性

（4）流量切到新库，完成平滑迁移

# 系统运行

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org