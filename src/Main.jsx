import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css';



export default function Main() {
    return (
    <div className='page'>
        
        <img className='image' src={process.env.PUBLIC_URL + '/image/gym.png'}></img>

        <div className='title'>
            <span style={{ fontSize: '40px' }}>헬</span>스를 
            <span style={{ fontSize: '40px' }}>    품</span>은
            <span style={{ fontSize: '40px' }}>    타</span>이머
        </div>
        
        <div>
            <Link to="./Login" className='Link'> 
                <button className='loginButton' > 로그인 </button>
            </Link>
        </div>
        

        <div className='new'>
            <span>계정이 없으신가요?</span>
            <Link to="./Time" className='Link'>
            <span style={{ margin: '0 10px'}} className='newPerson'> 가입하기</span>
            </Link>
        </div>
        


    </div>
    )
}
