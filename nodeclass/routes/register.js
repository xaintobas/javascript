const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.post('/register', (req, res) => {
  res.send('Registration is successful...');
});

module.exports = router;