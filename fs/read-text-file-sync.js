'use strict';

var fs = require('fs');

// 读文件----------------------------------------------------------------------------------------------
// 同步读取文本文件
try {
    var data = fs.readFileSync('sample.txt', 'utf-8');
    console.log(data);
} catch(err) {
    console.log('出错了');
}