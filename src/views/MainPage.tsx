import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styled from "@emotion/styled";
import BottomNav from "../components/MainPage/BottomNav";
import Header from "../components/MainPage/Header";
import OptionButton from "../components/MainPage/OptionButton";
import Product from "../components/MainPage/Product";
import { optionList } from "../constants/mainPage";

const client = new ApolloClient({
  uri: "http://3.39.54.196:8080/graphql",
  cache: new InMemoryCache(),
});

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

client
  .query({
    query: GET_PRODUCTS,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error fetching data: ", error);
  });

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
