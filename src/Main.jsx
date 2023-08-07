import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from './image/gym.png';


export default function Main() {
    return (
    <Page>
        <LogoD>
            <Logo src={logo} alt="로고이미지"></Logo>
        </LogoD>

        <Title>
            <HealthPumTa>헬</HealthPumTa>스를 
            <HealthPumTa>    품</HealthPumTa>은
            <HealthPumTa>    타</HealthPumTa>이머
        </Title>
        
        <Login>
            <CustomLink to="./Login" className='Link'> 
                <LoginButton> 로그인 </LoginButton>
            </CustomLink>
        </Login>
        

        <New>
            <span>계정이 없으신가요?</span>
            <CustomLink to="./Time" className='Link'>
            <NewPerson> 가입하기</NewPerson>
            </CustomLink>
        </New>
        


    </Page>
    )
}


const Page = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    max-width: 500px;
    left: 50%;
    transform: translate(-50%, 0);
    background-color:white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`;


const LogoD = styled.div`
    margin-top:10%;
`

const Logo = styled.img`
    width: 80%;
    max-height: 330px; /* 높이를 원하는 값으로 조정 */
    margin: auto;
    display: block;
`;

const Title = styled.div`
    font-size: 30px;
    color: #4E4FEB; 
    text-align: center;
    background-color: white;
    margin-top: 30px;
`;

const Login = styled.div``;

const LoginButton = styled.button`
    width: 50%;
    height: 50px;
    margin: auto;
    display: block;
    border: none;
    font-weight: 500;
    font-size: 20px;
    background-color: #4E4FEB;
    border-radius: 10px;
    color: white;
    cursor: pointer; 
    margin-top: 30px;

`;

const CustomLink = styled(Link)`
    text-decoration: none;
`;

const New = styled.div`
    font-size: 15px;
    text-align: center;
    background-color: white;
    margin-top: 20px;
`;
const HealthPumTa = styled.span`
    font-size: 40px;
`;
const NewPerson = styled.span`
    margin: 0 10px;
    color: #4E4FEB;
`;