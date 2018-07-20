'use strict';

var fs = require('fs');

// 获取文件信息----------------------------------------------------------------------------------------------
// 同步
var stat = fs.statSync('sample.txt');
// 是否是文件:
console.log('isFile: ' + stat.isFile());
// 是否是目录
console.log('isDirectory: ' + stat.isDirectory());
if (stat.isFile()) {
    // 文件大小
    console.log('size: ' + stat.size);
    // 创建时间, Date对象:
    console.log('birth: ' + stat.birthtime);
    // 修改时间, Date对象:
    console.log('modified time: ' + stat.mtime);
}