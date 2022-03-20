<!--
 * @作者: 14770137
 * @Date: 2022-03-17 19:47:24
-->
# js in es6

###promise
> promise 有三个resolved 拒绝 rejected 连接 pending 成功 fulfilled
```js
    var a = new Promise((resolved,rejected)=>
    {
        
        if(true){
            resolved("成功")
        }else{
            rejected()
        }
    })

    a.then((val)=>{
        console.log(val);
    })

```