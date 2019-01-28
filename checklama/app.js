const View = require('./server/views/view');
const Model = require('./server/models/model');
const Controller = require('./server/controllers/controller');
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const koaBody = require('koa-body');

app.use(serve(__dirname + '/'));
app.use(koaBody());

app.use(async ctx => {
    await controller.request(ctx);
});

app.listen(3000);