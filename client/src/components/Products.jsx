import React from "react";
import styled from "styled-components";
import { products } from "../dummyData";
import Product from "./Product";
function Products() {
  const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    
  `;

  return (
    <Container>
      {products.map((item, index) => (
        <Product key={index} item={item} />
      ))}
    </Container>
  );
}

export default Products;
