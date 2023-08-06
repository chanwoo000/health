import React, { useEffect, useState } from 'react'

export default function Login() {
    const [id, setID] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    

    const handleId = (e) => {
        setID(e.target.value);
        const regex = /^[a-zA-Z0-9]+$/;
        if(regex.test(e.target.value)){
            setIdValid(true);
        }else{
            setIdValid(false);
        }
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^.+$/;
        if(regex.test(e.target.value)){
            setPwValid(true);
        }else{
            setPwValid(false);
        }
    }
    useEffect(()=>{
        if(idValid && pwValid){
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    },[idValid,pwValid]);

    return (
    <div className='page'>

        <div className='titleWrap'>
            <span style={{ fontSize: '40px' }}>헬</span>스를 
            <span style={{ fontSize: '40px' }}>    품</span>은
            <span style={{ fontSize: '40px' }}>    타</span>이머
        </div>

        <div className='contentWrap'>

            <div className='inputTitle'>ID</div>
            <div className='inputWrap'>
                <input 
                type='text'
                className='input' 
                placeholder='올바른 아이디를 입력해주세요  (한글 x)' 
                value={id}
                onChange={handleId}>
                </input>
            </div>
            
            <div style={{marginTop:"26px"}}className='inputTitle'>PASSWORD</div>      
            <div className='inputWrap'>
                <input 
                type='password'
                className='input' 
                placeholder='영문, 숫자, 특수문자 포함 8자 이상' 
                value={pw}
                onChange={handlePw}>
                </input>
            </div>         
        </div>

        <div>
            <button disabled={notAllow} className='bottonButton'>
                로그인
            </button>
        </div>

    </div>
    )
}
