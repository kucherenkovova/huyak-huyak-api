const Router = require('@koa/router');

const root = new Router();
const v1 = new Router();

v1.use('/schools', require('./schools').routes());
root.use('/api/v1', v1.routes());

module.exports = root;