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
    if(botable == 'interview'){ 
        pool.getConnection(function(err, connection) {
            connection.query(
                'select * from reactinterview.'+botable, 
                (error, result) => {
                    if(error) throw error;
                    res.send(result)
                })       
            connection.release(); 
        })
    }
})

module.exports = router;