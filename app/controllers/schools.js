const index = async ctx => {
  ctx.body = [
    { name: 'Taras Shevchenko University' },
    { name: 'Stanford University' },
    { name: 'MIT' }
  ]
};

const get = async ctx => {
  ctx.body = { name: 'Taras Shevchenko University' };
};

const create = async ctx => {
  ctx.status = 201;
  ctx.body = ctx.request.body;
};

const remove = async ctx => {
  ctx.status = 204;
};

const update = async ctx => {
  ctx.body = ctx.request.body;
};

module.exports = {
  index,
  get,
  create,
  remove,
  update
};