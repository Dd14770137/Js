<!--
 * @作者: 14770137
 * @Date: 2022-03-19 21:43:51
-->
> QQ小程序
### 引用文件
```js
const util = require('../../utils/util.js')
```
### 修改数据尽量使用setDate
```js
    // 异步更新
    this.setData({对象})
    // 同步更新
    this.data({});

    // ps 直接修改 this.data 而不调用 this.setData 
    // 是无法改变页面的状态的，还会造成数据不一致。
```

```js
App({
  onLoad(options) {
    // 在页面加载时进行一些初始化。
  },
  onLaunch(options) {
    // 第一次启动
  },
  onShow(options) {
    // 小程序显示
  },
  onHide() {
    // 小程序影藏
  },
  // 错误监听
  onError(msg) {
    console.log(msg)
  },
  // 全局数据
  globalData: 'I am global data'
})

// 获取小程序示例
// other.js
const appInstance = getApp()
console.log(appInstance.globalData) // I am global data
```

> 获取data数据与vue一样

> 事件
```js
// 定义事件
  clickOn : (e)=>{
    console.log("test");
  }
// bindtap调用事件
 <button bindtap="clickOn">test</button>
// 非原始组件可以
 <button bind:tap="clickOn">test</button>
```

#### 组件中定义数据 dataset
```html
<view data-alpha-beta="1" data-alphaBeta="2" bindtap="bindViewTap">
  DataSet Test
</view>

Page({
  bindViewTap(event) {
    event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
    event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写
  }
})

```

### 应用 import  include
```js
  // 
  <import src="test.qml"/>
  <template is="test" data="{{text:'123'}}"></template>
  <include src="../template/test.qml"/>
```

### api
```js
// 显示页面路径
 console.log(this.route)
```