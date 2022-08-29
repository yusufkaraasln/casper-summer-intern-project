import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

function ProductList() {
  const Container = styled.div``;
  const Title = styled.h1`
    margin: 20px;
  `;
  const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const Filter = styled.div`
    margin: 20px;
  `;

  const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
  `;
  const Select = styled.select`

        padding: 10px;
        margin-right: 20px;
        outline: none;

  `;
  const Option = styled.option``;

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Gaming Laptop</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Laptop
            </Option>
            <Option>Gaming Laptop</Option>
            <Option>Desktop</Option>
            <Option>Gaming Desktop</Option>
            <Option>Monitor</Option>
            <Option>Tablet</Option>
            <Option>Phone</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Price
            </Option>
            <Option>0 - 500</Option>
            <Option>500 - 1000</Option>
            <Option>1000 - 2000</Option>
            <Option>2000 - 3000</Option>
            <Option>3000 - 4000</Option>
            <Option>4000 - 5000</Option>
            <Option>5000 - 6000</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Oldest</Option>
            <Option>Price</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
