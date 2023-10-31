import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
`

const ButtonStyle = styled.button`
    font-size: 12px;
    background-color: white;
    color: black;
    border: none;
    padding: 5px 15px;
    border-radius: 10px;
`

const Message = styled.div`
    font-size: 12px;
    color: white;
    margin-left: 30px;
`

export default function LoginControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    return (
        <Container>
            <ButtonStyle onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
                {isLoggedIn ? '로그아웃' : '로그인'}
            </ButtonStyle>
            <Message>
                {isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
            </Message>
        </Container>
    );
}
