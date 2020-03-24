import { Router } from 'express';
import connection from '../services/db';
var router = Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(`/users was requested`);

  connection.connect((err) => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });
  connection.end();
  
  

});

export default router;
