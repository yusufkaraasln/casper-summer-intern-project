import { Add, Remove } from "@mui/icons-material";
import React, { useEffect } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../axiosRequest";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

function Cart() {
  const Container = styled.div``;
  const Wrapper = styled.div`
    padding: 20px;
  `;
  const Title = styled.h1`
    font-weight: 300;
    text-align: center;
  `;
  const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  `;
  const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) =>
      props.type === "filled" ? "none" : "2px solid black"};
    background: ${(props) => (props.type === "filled" ? "#242526" : "#fff")};
    color: ${(props) => props.type === "filled" && "white"};
  `;

  const TopTexts = styled.div``;
  const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
  `;

  const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Info = styled.div`
    flex: 3;
    overflow-y: scroll;
    max-height: 800px;
  `;

  const Product = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const ProductDetail = styled.div`
    flex: 2;
    display: flex;
  `;
  const Image = styled.img`
    width: 200px;
  `;
  const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const ProductName = styled.span``;
  const ProductID = styled.span``;
  const ProductColor = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  `;
  const ProductRAM = styled.span``;
  const PriceDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
  `;

  const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
  `;
  const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
  `;

  const Hr = styled.hr`
    height: 1px;
    background-color: #eee;
    border: none;
  `;
  const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: fit-content;
  `;

  const SummaryTitle = styled.h1`
    font-weight: 200;
  `;
  const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type && "bold"};
    font-size: ${(props) => props.type && "24px"};
  `;
  const SummaryItemText = styled.span``;
  const SummaryItemPrice = styled.span``;
  const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: black;
    color: white;
  `;

  const cart = useSelector((state) => state.cart);
  console.log(KEY);
  const [stripeToken, setStripeToken] = React.useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const request = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { replace: true }, {data: res.data} );
      } catch (e) {
        console.log(e);
      }
    };

    stripeToken && request();


  }, [stripeToken, cart.total, navigate]);

  console.log(stripeToken);
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>COUNTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((item) => (
              <>
                <Product>
                  <ProductDetail>
                    <Image src={item.img} />

                    <Details>
                      <ProductName>
                        <b>Product:</b> {item.title}
                      </ProductName>
                      <ProductID>
                        <b>ID:</b> {item._id}
                      </ProductID>
                      <ProductColor color={item.color} />
                      <ProductRAM>
                        <b>RAM:</b> {item.ram}
                      </ProductRAM>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <Remove />
                      <ProductAmount>{item.quantity}</ProductAmount>
                      <Add />
                    </ProductAmountContainer>
                    <ProductPrice>{item.price * item.quantity} ₺</ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />

                <Hr />
              </>
            ))}
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{cart.total}₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>KDV</SummaryItemText>
              <SummaryItemPrice>2.500₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>CARGO</SummaryItemText>
              <SummaryItemPrice>50₺</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>TOTAL</SummaryItemText>
              <SummaryItemPrice>{cart.total}₺</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Excalibur Store"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcE6OEu9jYrrPaN64xI3lWaHhvDGsZCMLgOAn3tY_a&s"
              billingAddress
              shippingAddress
              description={`Toplam tutar ${cart.total}₺`}
              amount={cart.total * 100}
              currency="TRY"
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
