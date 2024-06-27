import styled from "@emotion/styled";
import IcMenu from "../../assets/ic_menu.svg?react";

interface ProductProps {
  imageUrl: string;
  location: string;
  price: number;
  title: string;
}

function Product({ imageUrl, location, price, title }: ProductProps) {
  return (
    <ProductWrapper>
      <StyledIcMenu />
      <ProductImg src={imageUrl} />
      <ProductInfoContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductLocationInfo>{location}</ProductLocationInfo>
        <ProductPrice>{`${price}원`}</ProductPrice>
      </ProductInfoContainer>
    </ProductWrapper>
  );
}

export default Product;

const ProductWrapper = styled.div`
  position: relative;

  display: flex;
  column-gap: 0.8rem;

  width: 100%;
  height: 5.8rem;
  padding: 0.8rem 0;

  border: 1px solid black;
`;

const ProductImg = styled.img`
  width: 5.8rem;
  height: 100%;

  border-radius: 0.5rem;
`;

const ProductInfoContainer = styled.div`
  width: calc(100% - 10rem);
  padding: 0.3rem 0;
  height: calc(100% - 0.6rem);
`;

const ProductTitle = styled.h2`
  margin: 0;

  font-size: 0.9rem;
  font-weight: 400;
`;

const ProductLocationInfo = styled.p`
  margin: 0;
  padding-top: 0.3rem;

  font-size: 0.7rem;
  font-weight: 400;
  color: gray;
`;

const ProductPrice = styled.p`
  margin: 0;
  padding-top: 0.3rem;

  font-size: 1rem;
  font-weight: 700;
`;

const StyledIcMenu = styled(IcMenu)`
  position: absolute;
  top: 1.1rem;
  right: 0.2rem;

  width: 1.1rem;
  height: 1.1rem;
`;
