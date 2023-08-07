import React, { useEffect, useState } from 'react'
import styled from "styled-components";


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
    <Page>

        <TitleWrap>
            <HealthPumTa>헬</HealthPumTa>스를 
            <HealthPumTa>    품</HealthPumTa>은
            <HealthPumTa>    타</HealthPumTa>이머
        </TitleWrap>

        <ContentWrap>

            <InputId>ID</InputId>
            <InputWrap>
                <Input
                type='text'
                className='input' 
                placeholder='올바른 아이디를 입력해주세요  (한글 x)' 
                value={id}
                onChange={handleId}>
                </Input>
            </InputWrap>
            
            <InputTitle>PASSWORD</InputTitle>      
            <InputWrap>
                <Input 
                type='password'
                className='input' 
                placeholder='영문, 숫자, 특수문자 포함 8자 이상' 
                value={pw}
                onChange={handlePw}>
                </Input>
            </InputWrap>         
        </ContentWrap>

        <LoginBottom>
            <BottomButton disabled={notAllow}>
                로그인
            </BottomButton>
        </LoginBottom>

    </Page>
    )
}

const Page = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    padding: 0 20px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color:white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleWrap = styled.div`
    margin-top: 100px;
    font-size: 26px;
    color: #4E4FEB; 
    text-align: center;
`;
const HealthPumTa = styled.span`
    font-size: 40px;
`;

const ContentWrap = styled.div`
    margin-top: 60px;
    flex: 1;
    width: 80%;
    align-self: center;
`;

const InputWrap = styled.div`
    margin: auto;
    display: block;    
    border-radius: 10px;
    padding:16px;
    margin-top: 8px;
    background-color: #4E4FEB;
    border: 1px solid white;
    width: 80%;
`;

const InputId = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: #4E4FEB;
    
`;

const InputTitle = styled.div`
    margin-top: 26px;
    font-size: 20px;
    font-weight: 400;
    color: #4E4FEB;
`;

const Input = styled.input`
    width: 100%;
    outline: none;
    border: none;
    height: 30px;
    font-size: 14px;
    font-weight: 300;
    background-color: #4E4FEB;
    color: white;
    &::placeholder{
        color:rgb(212, 212, 212);
    }
`;



const LoginBottom = styled.div`
    margin-bottom: 30%;
`;

const BottomButton = styled.button`
    width: 50%;
    height: 50px;
    margin: auto;
    display: block;
    font-weight: 600;
    background-color: #4E4FEB;
    border-radius: 10px;
    color: white;
    cursor: pointer; 
    &:disabled{
        background-color:white;
        color: #4E4FEB;
        border-color: #4E4FEB;
    }
`
