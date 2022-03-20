/*
 * @作者: 14770137
 * @Date: 2022-03-17 19:56:23
 */
console.log('promise');

var a = Promise.resolve({
    a: "123"
});

a.then((val) =>{{
    console.log(val);
}});
