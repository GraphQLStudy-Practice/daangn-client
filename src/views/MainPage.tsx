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
  justify-content: center;
  align-items: center;
`;
