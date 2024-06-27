import styled from "styled-components";
import { NavItemProps } from "../../types/mainPageTypes";

function NavItem({ icon, name }: NavItemProps) {
  return (
    <NavItemWrapper>
      <IconWrapper>{icon}</IconWrapper>
      <NavName>{name}</NavName>
    </NavItemWrapper>
  );
}

export default NavItem;

const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 0.6rem;

  width: 3rem;
  height: 100%;
`;

const NavName = styled.p`
  margin: 0;

  font-size: 0.7rem;
  font-weight: 400;
`;

const IconWrapper = styled.div`
  width: 1rem;
  height: 1rem;
`;
