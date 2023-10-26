const express = require('express');
const router = express.Router();

const redis = require('../redis');

router.get('/', async (_, res, ) => {
  const count = await redis.getAsync('added_todos');
  res.json(
    {
      "added_todos": parseInt(count)
    }
  )
});

module.exports = router;