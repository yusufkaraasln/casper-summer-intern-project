import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
`;

const SearchContainer = styled.div`
  border: 0.5px solid #ccc;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Right = styled.div`
  flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Auth = styled.div`
  font-size: 14px;
  cursor: pointer;
    margin-left: 25px;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:16}} />
          </SearchContainer>
        </Left>
        <Center>
         <Link style={{textDecoration: "none", color: "inherit"}} to="/">
         <Logo>EXCALIBUR</Logo>
         </Link>
        </Center>
        <Right>
          <Auth>REGISTER</Auth>
          <Auth>LOGIN</Auth>
          <Auth>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
            </Badge>
          </Auth>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
