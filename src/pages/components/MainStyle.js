import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Page = styled.div`
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

export const LogoD = styled.div`
    margin-top:20%;
`;

export const Logo = styled.img`
    width: 80%;
    max-height: 350px; /* 높이를 원하는 값으로 조정 */
    margin: auto;
    display: block;
`;

export const Title = styled.div`
    font-size: 30px;
    color: #4E4FEB; 
    text-align: center;
    background-color: white;
    margin-top: 30px;
`;

export const Login = styled.div``;

export const LoginButton = styled.button`
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

export const CustomLink = styled(Link)`
    text-decoration: none;
`;

export const New = styled.div`
    font-size: 15px;
    text-align: center;
    background-color: white;
    margin-top: 20px;
`;

export const HealthPumTa = styled.span`
    font-size: 40px;
`;

export const NewPerson = styled.span`
    margin: 0 10px;
    color: #4E4FEB;
`;