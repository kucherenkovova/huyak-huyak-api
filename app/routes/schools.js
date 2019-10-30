const Router = require('@koa/router');
const { schools } = require('app/controllers');

const router = new Router();

router.param('schoolID', async (id, ctx, next) => {
  return next();
});

router.get('/', schools.index);
router.post('/', schools.create);

router.get('/:schoolID', schools.get);
router.put('/:schoolID', schools.update);
router.delete('/:schoolID', schools.remove);


module.exports = router;