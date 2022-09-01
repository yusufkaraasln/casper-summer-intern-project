import React from "react";
import styled from "styled-components";

function Register() {
  const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://www.casper.com.tr/uploads/2022/08/slider_op.webp") no-repeat
        center center fixed;
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
  `;

  const Input = styled.input`
    outline: none;
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
  `;
  const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
  `;
  const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
  `;
  const Button = styled.button`
    width: 50%;
    border: none;
    padding: 15px 20px;
    background: #242526;
    color: #fff;
    cursor: pointer;
  `;
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name"></Input>
          <Input placeholder="Last Name"></Input>
          <Input placeholder="Username"></Input>
          <Input placeholder="Email"></Input>
          <Input placeholder="Password" type="password"></Input>
          <Input placeholder="Confirm Pasword" type="password"></Input>
          <Agreement>
            By creating an account you agree to our <b>Terms & Conditions</b>{" "}
            and <b>Privacy Policy</b>.
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
