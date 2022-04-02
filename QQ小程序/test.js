/*
 * @作者: 14770137
 * @Date: 2022-03-21 15:14:35
 */
const sleep = function(Time){
    return new Promise(resolve=>{
        setTimeout(resolve,Time);
    });
}

async function test(){
    var a = false;
    while(!a){
        await sleep(1000).then(res=>{
            console.log("sleep");
        });
        a = true;
    }
}

test();