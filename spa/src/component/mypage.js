import React, { useEffect, useState }from 'react';
import axios from 'axios';


function Mypage(){
    
    const [ mytext, mytextUpdate ] = useState('미리 세팅한 값')

    useEffect ( async () => {

        axios({
            url : '/router',
            method : 'GET'
        })
        .then( res => {
            mytextUpdate(res.data)
        })
    }, [] )

    return(
        <div>
            <h3>함수형 컴포넌트</h3>
            <p>useState에 의해 컴포넌트가 새로고침 된다.</p>
            <p>get는 axios.get로 응답받는다 : {mytext}</p>
        </div>
    )

};

export default Mypage;