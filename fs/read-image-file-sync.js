'use strict';

var fs = require('fs');

// 读文件----------------------------------------------------------------------------------------------
// 同步读取图片文件
try {
    var data = fs.readFileSync('sample.jpg');
    console.log(data);
    console.log(data.length + ' bytes');
} catch(err) {
    console.log('出错了');
}