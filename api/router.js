var express = require('express');
var router = express.Router();
var awsconnect = require('./awsconnect');

router.use('/aws', awsconnect);
router.use(express.urlencoded({ extended : true }))

router.get('/', (req, res, next) =>{

    var type = req.query.type;

    if( type == 'aws'){ // DB 접근하는 Router
        req.body.mapper = "awsmydata"; // mybatis_mapper의 namespace
        req.body.crud = "select"; // select, insert, update, delete 중 선택
        req.body.mapper_id = "interview"; // sql문 정보를 담고있는 객체의 id

        router.use('/', awsconnect);
        next('route');

    }else{ 
        console.log('설정된 테이블이 아니거나 오류가 발생했습니다. DB를 확인해보세요')
    };
});

module.exports = router;