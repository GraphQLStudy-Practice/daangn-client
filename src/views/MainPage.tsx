import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { GET_PRODUCTS } from "../apis/\bqueries";
import BottomNav from "../components/MainPage/BottomNav";
import Header from "../components/MainPage/Header";
import OptionButton from "../components/MainPage/OptionButton";
import Product from "../components/MainPage/Product";
import WriteButton from "../components/MainPage/WriteButton";
import { optionList } from "../constants/mainPage";

const MainPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <Wrapper>
      <Header />
      <PageBody>
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
      </PageBody>
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

  & > * + * {
    border-top: 1px solid #d1d3d8;
  }
`;

const PageBody = styled.main`
  width: 100%;
  padding: 3rem 0 3.5rem 0;
`;
