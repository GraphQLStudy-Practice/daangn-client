import styled from "@emotion/styled";
import IcAlarm from "../../assets/ic_alarm.svg?react";
import IcDown from "../../assets/ic_down.svg?react";
import IcSearch from "../../assets/ic_search.svg?react";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLeftSection>
        <SelectedPlaceText>철산동</SelectedPlaceText>
        <StyledIcDown />
      </HeaderLeftSection>
      <HeaderRightSection>
        <StyledIcSearch />
        <StyledIcAlarm />
      </HeaderRightSection>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 3rem;
`;

const HeaderLeftSection = styled.section`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;

  height: 100%;
`;

const SelectedPlaceText = styled.h2`
  font-size: 1rem;
`;

const StyledIcDown = styled(IcDown)`
  width: 0.8rem;
  height: 0.8rem;

  margin-bottom: 0.2rem;
`;

const HeaderRightSection = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;

  height: 100%;
`;

const StyledIcSearch = styled(IcSearch)`
  width: 1.1rem;
  height: 1.1rem;
`;
const StyledIcAlarm = styled(IcAlarm)`
  width: 1.2rem;
  height: 1.2rem;
`;
