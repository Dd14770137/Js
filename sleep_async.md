<!--
 * @作者: 14770137
 * @Date: 2022-03-21 17:59:50
-->
# sleep  async 使用

```js
const sleep = function(Time){
    return new Promise(resolve=>{
        setTimeout(resolve,Time);
    });
}

async function test(){
    while(true){
        await sleep(1000).then(res=>{
            console.log("sleep");
        });
    }
}

test();
```