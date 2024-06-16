import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IcPlus from "../../assets/ic_plus.svg?react";

function WriteButton() {
  const navigate = useNavigate();

  const handleClickWriteButton = () => {
    navigate("/add");
  };

  return (
    <WriteButtonWrapper onClick={handleClickWriteButton}>
      <StyledIcPlus />
      글쓰기
    </WriteButtonWrapper>
  );
}

export default WriteButton;

const WriteButtonWrapper = styled.button`
  position: fixed;
  bottom: 4.5rem;
  right: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.3rem;

  width: 6.5rem;
  height: 3rem;

  font-size: 1rem;
  font-weight: 600;
  color: white;

  border: none;
  border-radius: 2rem;
  background-color: #fe6f0f;
`;

const StyledIcPlus = styled(IcPlus)`
  width: 1rem;
  height: 1rem;
  margin-bottom: 0.05rem;

  fill: white;
`;
