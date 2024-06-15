import styled from "@emotion/styled";
import Header from "../components/MainPage/Header";
import OptionButton from "../components/MainPage/OptionButton";
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
