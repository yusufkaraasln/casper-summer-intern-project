import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

function Footer() {
  const Container = styled.div`
    display: flex;
    padding: 20px;
  `;

  const Left = styled.div`
    flex: 1;
  `;

  const Logo = styled.h1``;
  const Desc = styled.p`
    margin: 20px 0;
  `;
  const SocialContainer = styled.div`
    display: flex;
  `;
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    background: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;

  const Center = styled.div`
    flex: 1;
    padding: 20px;
  `;

  const Title = styled.h3`
    margin-bottom: 30px;
  `;

  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;

  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;

  const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;

  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;

const Payment = styled.img``

  return (
    <Container>
      <Left>
        <Logo>EXCALIBUR</Logo>
        <Desc>
          EXCALIBUR, Casper şirketinin bir alt kuruluşudur ana odak noktası
          oyuncular olup bu bağlamda yüksek performanslı donanımlar üretip
          kullanıcılarına sunar. Oyuncu ürünlerinin yanı sıra profesyonellere ve
          yediden yetmişe tüm kullanıcılarına yönelik ürünlerde sunmaktadır.
        </Desc>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="1DA1F2">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Tablet</ListItem>
          <ListItem>Phone</ListItem>
          <ListItem>Laptop</ListItem>
          <ListItem>Desktop</ListItem>
          <ListItem>Monitor</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{marginRight:"10px"}} /> CASPER PLAZA, Istanbul/Ümaraniye, TURKEY
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{marginRight:"10px"}} /> +90 ( 850 ) 034 03 43
        </ContactItem>
        <ContactItem>
          {" "}
          <MailOutline style={{marginRight:"10px"}} /> info@excalibra.com
        </ContactItem>

            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>

      </Right>
    </Container>
  );
}

export default Footer;
