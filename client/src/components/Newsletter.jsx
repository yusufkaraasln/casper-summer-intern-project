import React from "react";
import { Send } from "@mui/icons-material";
import styled from "styled-components";
function Newsletter() {
  const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
  `;
  const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
  `;
  const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
  `;
  const Input = styled.input`
  
    border: none;
    flex: 8;
    padding: 0 20px;
    outline: none;
  
  `;
  const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #242526;
    outline: none;
    cursor: pointer;
    color: #fff;


  `;

  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Get the latest news and updates from us by subscribing to our
        newsletter.
      </Description>
      <InputContainer>
        <Input placeholder="Your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter;
