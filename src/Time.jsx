import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components";


export default function Time() {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    const timer = useRef()

    useEffect(() => {
        if (running){
            timer.current = setInterval(() => {
                setTime(pre => pre + 1)
            },1000)   
        }
        return () => clearInterval(timer.current)
    },[running])
    
    

    return (
        <Page>
            <Information>
                <div>000님</div>
                <div>오늘도 힘차게 시작해볼까요?</div>
            </Information>
            
            <Timer>{format(time)}</Timer>

            <Actions>
                <Action onClick={() => setTime(0)}>초기화</Action>
                <Action onClick={() => {
                    if(running)clearInterval(timer.current)
                    setRunning(!running)
                }}>
                    {running ? '일시정지' : '시작'}
                    </Action>
            </Actions>

            <Actions>
                <Action2>목표</Action2>
                <Action1>타이머</Action1>
                <Action2>내정보</Action2>
            </Actions>
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
`;

const Information = styled.div`
    margin-top: 50px;
    margin-left:30px;
    font-size: 20px;
`;
const Timer = styled.div`
    font-size: 500%;
    text-align: center;
    color: black;
    margin-top: 60px;
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;

`
const Action = styled.button`
    width: 20%;
    height: 50px;
    font-weight: 400;
    background-color: #4E4FEB;
    border: none;
    border-radius: 10px;
    color: white;
    margin-left: 20px;
    cursor: pointer;
`
const Action1 = styled.button`
    width: 20%;
    height: 50px;
    font-weight: 400;
    background-color: #4E4FEB;
    border: none;
    border-radius: 10px;
    color: white;
    margin-left: 20px;
    cursor: pointer; 
    margin-top: 100px;
`
const Action2 = styled.button`
    width: 20%;
    height: 50px;
    font-weight: 400;
    background-color:gray;
    border: none;
    border-radius: 10px;
    color: white;
    margin-left: 20px;
    cursor: pointer; 
    margin-top: 100px;
`

const format = (time) => {
    let hours = Math.floor(time / 60 / 60%24)
    let minutes = Math.floor(time / 60 % 60)
    let seconds = Math.floor(time % 60)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return hours + ":" + minutes + ":" + seconds
}