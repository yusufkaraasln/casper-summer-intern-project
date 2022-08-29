import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

function Product() {
  const Container = styled.div``;
  const Wrapper = styled.div`
    display: flex;
    padding: 50px;
  `;
  const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Img = styled.img`
    width: 60%;

    object-fit: cover;
  `;

  const InfoContainer = styled.div`
    padding: 0px 50px;
    flex: 1;
  `;
  const Title = styled.h1`
    font-weight: 200;
  `;
  const Desc = styled.p`
    margin: 20px 0;
  `;
  const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
  `;

  const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
  `;
  const Filter = styled.div`
    display: flex;
    align-items: center;
  `;
  const FilterTitle = styled.div`
    font-size: 20px;
    font-weight: 200;
  `;
  const FilterSeries = styled.div`
    width: 20px;
    height: 20px;

    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0 5px;
    border: 1px solid lightgray;
  `;
  const FilterRAM = styled.select`
    margin: 0 0 0 10px;
    padding: 5px;
    outline: none;
  `;
  const FilterRAMOption = styled.option``;

  const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
  `;

  const Amount = styled.span`
        width: 30px;
        height: 30px;
        border-radius: 10px;
        border : 1px solid #242526;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 15px;
  `;
  const Button = styled.div`
    
    padding: 15px;
    border: 2px solid #242526;
    background: #fff;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
  
  `;

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src="https://www.casper.com.tr/uploads/2020/09/casper-via-tablet-s38plus-mavi_h270_op.webp" />
        </ImgContainer>
        <InfoContainer>
          <Title>Tablet</Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
            repellat cumque similique neque. Optio facere eligendi repellendus
            minima nostrum voluptates.
          </Desc>
          <Price>12.000 ₺</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterSeries color="black" />
              <FilterSeries color="white" />
              <FilterSeries color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>RAM</FilterTitle>
              <FilterRAM>
                <FilterRAMOption>16GB</FilterRAMOption>
                <FilterRAMOption>32GB</FilterRAMOption>
                <FilterRAMOption>64GB</FilterRAMOption>
              </FilterRAM>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{cursor: "pointer"}} />
              <Amount>1</Amount>
              <Add style={{cursor: "pointer"}} />
            </AmountContainer>
            <Button>Add TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
