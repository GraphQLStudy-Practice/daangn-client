import styled from "@emotion/styled";
import Header from "../components/MainPage/Header";
import OptionButton from "../components/MainPage/OptionButton";
import Product from "../components/MainPage/Product";
import { optionList } from "../constants/mainPage";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
      <OptionButtonList>
        {optionList.map(({ id, buttonText }) => (
          <OptionButton key={id} buttonText={buttonText} />
        ))}
      </OptionButtonList>
      <ProductList>
        <Product />
        <Product />
        <Product />
      </ProductList>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 0.5rem;
`;

const OptionButtonList = styled.section`
  width: 100%;
  margin-top: 1rem;

  display: flex;
  column-gap: 1rem;
`;

const ProductList = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
`;
