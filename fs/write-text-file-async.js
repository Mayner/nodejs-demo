'use strict';

var fs = require('fs');

// 写文件 ----------------------------------------------------------------------------------------------
// 异步
var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
