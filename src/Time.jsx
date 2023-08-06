import React, { useEffect, useState, useRef } from 'react'
import './Time.css';
import { Link } from 'react-router-dom'

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
        <div className="page">
            <div className='information'>
                <div>000님</div>
                <div>오늘도 힘차게 시작해볼까요?</div>
            </div>
            
            <p className='timer'>{format(time)}</p>

            <div className='actions'>
                <button className='action'>이전</button>
                <button className='action' onClick={() => setTime(0)}>초기화</button>
                <button className='action' onClick={() => {
                    if(running)clearInterval(timer.current)
                    setRunning(!running)
                }}>
                    {running ? '일시정지' : '시작'}
                    </button>
            </div>

            <div className='actions'>
                <button className='action2'>목표</button>
                <button className='action1'>타이머</button>
                <button className='action2'>내정보</button>
            </div>
        </div>
    )
}



const format = (time) => {
    let hours = Math.floor(time / 60 / 60%24)
    let minutes = Math.floor(time / 60 % 60)
    let seconds = Math.floor(time % 60)

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return hours + ":" + minutes + ":" + seconds
}