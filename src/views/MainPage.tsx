import styled from "@emotion/styled";
import Header from "../components/MainPage/Header";

const MainPage = () => {
  return (
    <Wrapper>
      <Header />
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
