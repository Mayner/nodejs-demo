const crypto = require('crypto');

// MD5是一种常用的哈希算法，用于给任意数据一个“签名”。
// 这个签名通常用一个十六进制的字符串表示
const hash = crypto.createHash('md5');  // 7e1977739c748beac0c0fd14fd26a544

// 也可以计算SHA1
// const hash = crypto.createHash('sha1');  // 1f32b9c9932c02227819a4151feed43e131aca40

// 也可以计算SHA256
// const hash = crypto.createHash('sha256');  // 940371b8619c00ed7a39d46ba45e71b5081ea19e35fa7d8315e5972a501465af

// 也可以计算SHA512
// const hash = crypto.createHash('sha512');  
// 7628241ce84a5b88ea745309ce984e9fd09a4ebbd041be877bd1670b77f70ee04be877818ceee2924b23cabfd8d4ed8808ed25d2a90cccb1a0cbd7ccc1067ac1

// 可任意多次调用update();
hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));