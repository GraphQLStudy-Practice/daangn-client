import styled from "@emotion/styled";

const MainPage = () => {
  return (
    <Wrapper>
      <Text>MainPage</Text>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  color: blue;
`;
