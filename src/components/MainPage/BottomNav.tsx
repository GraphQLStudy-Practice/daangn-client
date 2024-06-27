import styled from "@emotion/styled";
import { navItemList } from "../../constants/mainPage";
import NavItem from "./NavItem";

function BottomNav() {
  return (
    <BottomNavWrapper>
      {navItemList.map((it) => (
        <NavItem key={it.id} {...it} />
      ))}
    </BottomNavWrapper>
  );
}

export default BottomNav;

const BottomNavWrapper = styled.section`
  position: fixed;
  bottom: 0;
  z-index: 1;

  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 3.5rem;

  border-top: 1px solid black;
  background-color: white;
`;
