/*
 * @作者: 14770137
 * @Date: 2022-04-01 13:35:37
 */
// json 首字母转大写
function ArrayToUpperCase(json) {
    if (typeof (json) == 'object') {
        for (var item in json) {
            for (var i in json[item]) {

                json[item][i.substring(0, 1).toUpperCase() + i.substring(1)] = json[item][i];
                delete(json[item][i]);
            }
        }
        return json;
    }
    return json;
}
function ArrayToUpperCase2(json) {
    if (typeof (json) == 'object') {
        for (var item of json) {
            for (var i in item) {

                item[i.substring(0, 1).toUpperCase() + i.substring(1)] = item[i];
                delete(item[i]);
            }
        }
        return json;
    }
    return json;
}


let data ={
    abc:"234",
    asd:"345"
}
// let data =[ {
//     abc:"123",
//     asd:"345"
// },{
//     abc:"123",
//     asd:"5345"
// },{
//     abc:"234",
//     asd:"345"
// }]
let handle={
    get:function(){
        return data;
    }
}

let pro =  new Proxy(data,handle);
// for(var item of data){
//     for(var i in item)
//     console.log(i);
// }
console.log(typeof pro);

console.log(ArrayToUpperCase2(pro));