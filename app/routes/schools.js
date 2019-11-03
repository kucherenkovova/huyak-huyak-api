const Router = require('@koa/router');
const { schools } = require('app/controllers');

const router = new Router();

router.param('school_id', async (id, ctx, next) => {
  return next();
});

router.get('/', schools.index);
router.post('/', schools.create);

router.get('/:school_id', schools.get);
router.put('/:school_id', schools.update);
router.delete('/:school_id', schools.remove);


module.exports = router;