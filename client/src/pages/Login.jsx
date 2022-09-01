import React, { useRef, useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
function Login() {
  const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #242526;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://www.casper.com.tr/uploads/2022/08/a700-enerji-anasayfa-slider-1_op.webp")
        no-repeat center center fixed;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;
  const Wrapper = styled.div`
    padding: 20px;
    left: 5%;
    position: absolute;
    width: 40%;
    background: #fff;
  `;
  const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  `;

  const Input = styled.input`
    flex: 1;
    outline: none;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
  `;
  const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
  `;
  const Link = styled.span`
    text-decoration: underline;
    font-size: 12px;
    cursor: pointer;
    margin: 10px 0;
  `;
  const Button = styled.button`
    width: 50%;
    border: none;
    padding: 15px 20px;
    background: #242526;
    color: #fff;
    cursor: pointer;
  `;

  const LinkWrapper = styled.div`
    margin: 10px 0;
    display: flex;

    flex-direction: column;
  `;

  const userRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {
      username: userRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input ref={userRef} placeholder="username" />
          <Input placeholder="password" type="password" ref={passwordRef} />
          <LinkWrapper>
            <Link>CREATE AN ACCOUNT</Link>
            <Link>FORGOT YOUR PASSWORD ?</Link>
          </LinkWrapper>

          <Button onClick={handleClick}>LOGIN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
