<!--
 * @作者: 14770137
 * @Date: 2022-03-20 17:30:19
-->
# nodejs

> 包管理
```js
// 引用模块
var foo1 = require('./foo');
// 当前模块倒出对象
exports.hello = function () {
    console.log('Hello World!');
};
// 替换当前模块的对象
module.exports = function(){

}

// 包管理，假设有3个模块 以mian模块为入口 代码如下
var head = require('./head');
var body = require('./body');

exports.create = function (name) {
    return {
        name: name,
        head: head.create(),
        body: body.create()
    };
};

// 调用时使用
require('/路径/main')

// package.json 
// 如果需要调用时直接 require('/路径/') 则
// 目录下的package.json内容为：
{
    "name": "cat",
    "main": "./lib/main.js"
}
```
