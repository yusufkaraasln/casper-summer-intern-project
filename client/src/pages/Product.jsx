import { Add, Remove } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../axiosRequest";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {useDispatch} from 'react-redux'

import {addProduct} from '../redux/cartSlice'
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
    border: 1px solid #242526;
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

    &:hover {
      background-color: #f8f4f4;
    }
  `;

 

  const location = useLocation();
  const userID = location.pathname.split("/")[2];
  const [product, setProduct] = React.useState({});
  const [colorSelect, setColorSelect] = React.useState("");
  const [ramSelect, setRamSelect] = React.useState("");

    const dispatch = useDispatch()


  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get("/products/one/" + userID);
      setProduct(res.data);
    };

    getProduct();
  }, [userID]);

  const [quantity, setQuantity] = React.useState(1);

  const handleCount = (type) => {
    if (type === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };
 
  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        color: colorSelect,
        ram: ramSelect,
      })
    );
  };
  

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price} ₺</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((color, index) => (
                <FilterSeries
                  color={color}
                  key={index}
                  onClick={() => setColorSelect(color)}
                />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>RAM</FilterTitle>
              <FilterRAM onChange={(e) => setRamSelect(e.target.value)}>
                {product.ram?.map((ram, index) => (
                  <FilterRAMOption
                  
                    
                    key={index}>{ram}</FilterRAMOption>
                ))}
              </FilterRAM>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove
                onClick={() => handleCount("remove")}
                style={{ cursor: "pointer" }}
              />
              <Amount> {quantity}</Amount>
              <Add
                onClick={() => handleCount("add")}
                style={{ cursor: "pointer" }}
              />
            </AmountContainer>
            <Button
            
                  onClick={handleClick}
            >Add TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
