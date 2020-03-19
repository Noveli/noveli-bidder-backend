import { Router } from 'express';
var router = Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(`/users was requested`);
});

export default router;
