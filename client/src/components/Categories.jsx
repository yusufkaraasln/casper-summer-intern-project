import React from "react";
import styled from "styled-components";

import { categories } from "../dummyData";
import CatItem from "./CatItem";

    const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    `

function Categories() {
  return (
    <Container>
      {categories.map((item, index) => (
        <CatItem key={index} item={item} />
      ))}
    </Container>
  );
}
export default Categories;
