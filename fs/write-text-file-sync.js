'use strict';

var fs = require('fs');

// 写文件 ----------------------------------------------------------------------------------------------
// 同步
var data = 'Hello, writeFileSync';
fs.writeFileSync('output1.txt', data);