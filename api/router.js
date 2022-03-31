var express = require('express');
var router = express.Router();
var awsconnect = require('./awsconnect');

router.use('/aws', awsconnect);

router.get('/', (req, res) => {
    res.send('라우팅 연결 성공');
});

module.exports = router;