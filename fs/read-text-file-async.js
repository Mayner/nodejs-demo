'use strict';

var fs = require('fs');

// 读文件----------------------------------------------------------------------------------------------
// 异步读取文本文件
fs.readFile('sample.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});