<!--
 * @作者: 14770137
 * @Date: 2022-03-18 09:23:14
-->
## vue

> env数据
```js
    import.meta.env.文件里面的值
```

> 使用组件
```js
    // 使用组件 
    import component form '';

    // export
    components:{
        component
    }
```

> vue 组件回调函数
```html
    // 组件内调用组件外的事件
    <el-icon @click="$emit('myClick')" />

    // 组件内定义
    emits: ["myClick"],

    // 使用，比如组件名称是 MyTemplate
    <MyTemplate @myClick="function()" />

```

> v-model 双向绑定
```html
    // 单向传值，组件内定义pops
    props: ["content"],

    // 双向传值需要加上
    emits:["update:content"]

    // 使用
    <MyTemplate v-model:content="content is v-model" />
```

> 计算属性，作用是方便管理，避免代码臃肿
```js
    // html
    <span>{{compute}}</span>

    // js
    computed:{
        // 计算属性
        compute(){
            return "123";
        },
        // get set函数
        custom{
            get(){
                return this.a;
            }
            set(val){
                this.a = val; 
            }
        }
    }


    
```