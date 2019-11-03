process.env.TZ = 'UTC';
if (!process.env.NODE_PATH) {
  process.env.NODE_PATH = process.cwd();
  require('module').Module._initPaths();
}

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());
app.use(require('app/routes').routes());

app.listen(3000);