const db = require('app/services/db');

const id = 'school_id';

const index = async ctx => {
  ctx.body = await db('schools').select('id', 'name').limit(20).offset(0);
};

const get = async ctx => {
  ctx.body = await db('schools').where({id: ctx.params[id]}).first();
};

const create = async ctx => {
  await db('schools').insert(ctx.request.body);
  ctx.status = 201;
  ctx.body = ctx.request.body;
};

const remove = async ctx => {
  await db('schools').where({id: ctx.params[id]}).del();
  ctx.status = 204;
};

const update = async ctx => {
  await db('schools').where({id: ctx.params[id]}).update(ctx.request.body);
  ctx.body = ctx.request.body;
};

module.exports = {
  index,
  get,
  create,
  remove,
  update
};