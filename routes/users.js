var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(`/users was requested`);
});
let json = {
  "data": [
    {
      "id": 1,
    },
    {
      "id": 2
    }
  ]
}

router.get('/json', (req, res, next) => {
  res.json(json.data);
});

router.get('/:id', (req, res, next) => {
  res.send(`/users was requested with ${req.params["id"]} as the id`);
});



module.exports = router;
