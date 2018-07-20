'use strict';

var fs = require('fs');

// 读文件----------------------------------------------------------------------------------------------
// 异步读取二进制文件
/* 当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组（注意和Array不同）。 */
fs.readFile('sample.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');

        // Buffer -> String
        var text = data.toString('utf-8');
        console.log(text);

        // String -> Buffer
        var buf = Buffer.from(text, 'utf-8');
        console.log(buf);
    }
});