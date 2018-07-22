/* 
koa把很多async函数组成一个处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。我们把每个async函数称为middleware，这些middleware可以组合起来，完成很多有用的功能。

例如，可以用以下3个middleware组成处理链，依次打印日志，记录处理时间，输出HTML：
*/

const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);  // 打印URL
    await next();  // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime();  // 当前时间
    await next();  // 调用下一个middleware
    const ms = new Date().getTime() - start;  // 耗费时间
    console.log(`Time: ${ms}ms`);  // 打印耗费时间
});

/* 
middleware的顺序很重要，也就是调用app.use()的顺序决定了middleware的顺序。
此外，如果一个middleware没有调用await next()，会怎么办？答案是后续的middleware将不再执行了。这种情况也很常见，例如，一个检测用户权限的middleware可以决定是否继续处理请求，还是直接返回403错误：
*/

app.use(async (ctx, next) => {
    if (await checkUserPermission(ctx)) {
        await next();
        ctx.response.type = 'text/html';
        ctx.response.body = '<h1>Hello, koa2!</h1>';
    } else {
        ctx.response.status = 403;
        ctx.response.body = '403错误';
    }
});

function checkUserPermission (ctx) {
    return true;
}

app.listen(3000);
console.log('app started at port 3000...');

/* 
最后注意 ctx 对象有一些简写的方法，例如：ctx.url 相当于 ctx.request.url, ctx.type 相当于 ctx.response.type。
*/