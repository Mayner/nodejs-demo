const Sequelize = require('sequelize');
const config = require('./config');

console.log('init sequelize...');

// 第一步，创建一个sequelize对象实例：
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// 第二步，定义模型Pet，告诉Sequelize如何映射数据库表：
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT,
}, {
    timestamps: false
});

// 往数据库中塞一些数据
var now = Date.now();

Pet.create({
    id: 'g-' + now,
    name: 'Gaffey',
    gender: false,
    birth: '2007-07-07',
    createdAt: now,
    updatedAt: now,
    version: 0
}).then(function (p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
});

// 以下用es7写法：更优
(async () => {
    var d = await Pet.create({
        id: 'd-' + now,
        name: 'darlin',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created.' + JSON.stringify(d));
})();

// 查询数据
(async () => {
    var pets = await Pet.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find ${pets.length} pets: `);
    for (let p of pets) {
        console.log(JSON.stringify(p));
        console.log('update pet...');
        // 更新数据,调用save()方法:
        p.gender = true;
        p.updatedAt = Date.now();
        p.version ++;
        await p.save();
        if (p.version === 3) {
            // 删除数据，调用destroy()方法:
            await p.destroy();
            console.log(`${p.name} was destroyed.`);
        }
    }
})();