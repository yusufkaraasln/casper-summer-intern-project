import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product";
function Products({ path, filters, sort }) {
  const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
  `;

  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        path
          ? `http://localhost:8080/api/products/?category=${path}`
          : "http://localhost:8080/api/products"
      )
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [path]);
 
  React.useEffect(() => {
    path &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, path, filters]);

  React.useEffect(() => {

      
    if (sort === "newest") {
      setFilteredProducts((prev)=> [...prev].sort((a,b)=>a.createdAt - b.createdAt));
    }  else   if (sort === "oldest") {
      setFilteredProducts((prev)=> [...prev].sort((a,b)=>b.createdAt - a.createdAt));
    }  else {
        setFilteredProducts((prev)=> [...prev].sort((a,b)=>a.price - b.price));
    }
      

  },[sort]);

  return (
    <Container>
      {path
        ? filteredProducts.map((item, index) => (
            <Link to={`/product/${item._id}`}>
            <Product key={index} item={item} />
            </Link>
          ))
        : products
            .slice(0, 8)
            .map((item) => (
            
              <Link to={`/product/${item._id}`}>
                <Product item={item} key={item.id} />
              </Link>
            
            
            ))}
    </Container>
  );
}

export default Products;
