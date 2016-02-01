var koa = require('koa');
var app = koa();

var root = __dirname + '/dist';
var opts = {
	// using defaults
};

app.use(require('koa-static')(root, opts));

app.listen(3000);

console.log('Koa listening on port 3000');