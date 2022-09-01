import { useLocation } from "react-router-dom";
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

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [filters, setFilters] = React.useState({});
  const [sort, setSort] = React.useState("newest");

  const handleChange = (e) => {
    const value = e.target.value;
          setFilters({
            ...filters,
            [e.target.name]: value
          })
        }
        
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Gaming Laptop</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="ram" onChange = {handleChange}>
            <Option disabled selected>RAM</Option>
            <Option>2</Option>
            <Option>4</Option>
            <Option>8</Option>
            <Option>16</Option>
            <Option>32</Option>
            <Option>64</Option>
          </Select>
          <Select name="color" onChange={handleChange}>
            <Option disabled selected>Color</Option>
            <Option>black</Option>
            <Option>white</Option>
            <Option>gray</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e)=>setSort(e.target.value)}>
            <Option value="newest" selected>Newest</Option>
            <Option value="oldest" >Oldest</Option>
            <Option value="price">Price</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products path={path} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default ProductList;
