import styled from "@emotion/styled";
import { OptionButtonProps } from "../../types/mainPageTypes";

function OptionButton({ buttonText }: OptionButtonProps) {
  return <OptionButtonWrapper>{buttonText}</OptionButtonWrapper>;
}

export default OptionButton;

const OptionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;
  padding: 0 1.1rem;

  font-size: 0.8rem;

  border: 1px solid red;
  border-radius: 0.5rem;
`;
