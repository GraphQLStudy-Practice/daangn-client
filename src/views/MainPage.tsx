import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import BottomNav from "../components/MainPage/BottomNav";
import Header from "../components/MainPage/Header";
import OptionButton from "../components/MainPage/OptionButton";
import Product from "../components/MainPage/Product";
import WriteButton from "../components/MainPage/WriteButton";
import { optionList } from "../constants/mainPage";

const MainPage = () => {
  const GET_PRODUCTS = gql`
    query Products {
      products {
        id
        title
        imageUrl
        price
        location
        uploadDate
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <Wrapper>
      <Header />
      <OptionButtonList>
        {optionList.map(({ id, buttonText }) => (
          <OptionButton key={id} buttonText={buttonText} />
        ))}
      </OptionButtonList>
      <ProductList>
        {data.products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ProductList>
      <WriteButton />
      <BottomNav />
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
