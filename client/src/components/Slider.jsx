import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

import { sliderItems as data } from "../dummyData";

function Slider() {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
  `;
  const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
  `;




  const Slide = styled.div`
    background: #${(props) => props.bg};
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100vw;
  `;
  const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
  `;
  const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
  `;

  const Img = styled.img`
    height: 35%;
  `;

  const Title = styled.h1`
    font-size: 70px;
  `;
  const Desc = styled.h1`
    margin: 50px 20px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.4px;
  `;
  const Button = styled.button`
    border: 1px solid #242526;
    background: transparent;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
  `;

  const [current, setCurrent] = React.useState(0);
  //   arr = 7
  //   data = 5
  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrent(current > 0 ? current - 1 : data.length - 1);
    } else {
      setCurrent(current < data.length - 1 ? current + 1 : 0);
    }
  };


  const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  -webkit-transition: all 1.5s ease-in-out;
`;
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper index={current}>
        {data.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default Slider;
