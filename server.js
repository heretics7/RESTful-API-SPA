var express = require('express');
var app = express();

app.set('port', 8000);
app.get('/', (req,res) => {
    res.send('노드 서버 구동 성공');
});

app.listen(app.get('port'), (req, res) => {
    console.log('노드 서버 구동 성공');
});