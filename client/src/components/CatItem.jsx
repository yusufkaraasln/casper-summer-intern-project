import React from "react";
import styled from "styled-components";

function CatItem({ item }) {
  const Container = styled.div`
    flex: 1;
    position: relative;

  `;
  const Img = styled.img`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    
  `;
  const Info = styled.div`
  
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
  `
  const Button = styled.button`
  
    border: none;
    padding: 10px;
    background: #fff;
    cursor: pointer;
    font-weight : 600;
  
  `;
  const Title = styled.h1`
  
  color: #fff;
  margin-bottom: 20px;


  `;

  return (
    <Container>
      <Img src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>DISCOVER NOW</Button>
      </Info>
    </Container>
  );
}

export default CatItem;
