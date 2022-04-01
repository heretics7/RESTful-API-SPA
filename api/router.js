var express = require('express');
var router = express.Router();
var awsconnect = require('./awsconnect');

router.use('/aws', awsconnect);

var mysql = require('mysql')
var dbconfig = require('../db/config.js')
var pool = mysql.createPool(dbconfig); 
router.use(express.urlencoded({ extended : true }))

router.get('/', (req, res, next) =>{

    var botable = req.query.botable;

    var crud = 'select';

    switch(botable){ // 스위치 방식
        case 'interview' :
            crud = 'select';
            break;
        case 'introduce' :
            crud = 'select';
            break;
        case 'preinterview' :
            crud = 'select';
            break;
        default:
            botable = 'none';
            crud = '';
            break;
    }

    if(botable != 'none'){ 
        pool.getConnection(function(err, connection) {
            connection.query(
                'select * from reactinterview.'+botable, 
                (error, result) => {
                    if(error) throw error;
                    res.send(result)
                })       
            connection.release(); 
        })
    }else{
        console.log('설정된 테이블이 아닙니다. DB를 확인해보세요')
    }
})

module.exports = router;