'use strict';

var url = require('url');

// url模块通过parse()将一个字符串解析为一个Url对象：
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));