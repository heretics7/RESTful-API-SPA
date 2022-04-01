var express = require('express');
var router = express.Router();
var awsconnect = require('./awsconnect');

router.use(express.urlencoded({ extended : true }))

router.post('/', (req, res, next) =>{

    var type = req.query.type;
    req.body.mapper = "awsmydata"; // mybatis_mapper의 namespace

    if(type){  
        switch(type){
            case 'interview' : req.body.crud = "select"; 
                        req.body.mapper_id = "interview";
                        break;
            case 'intro': req.body.crud = "select"; 
                        req.body.mapper_id = "introduce";
                        break;
            case 'pre': req.body.crud = "select"; 
                        req.body.mapper_id = "preinterview";
                        break;
            default     : req.body.crud = "delete"; 
                        req.body.mapper_id = "interviewDrop";
                        break; 
        }     
            router.use('/', awsconnect );
            next('route');
    }else{ 
        console.log('설정된 테이블이 아니거나 오류가 발생했습니다. DB를 확인해보세요')
    };
});

module.exports = router;