import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_PRODUCTS } from "../apis/\bqueries";

const AddPage = () => {
  const [values, setValues] = useState({
    title: "",
    imageUrl:
      "https://mblogthumb-phinf.pstatic.net/MjAyMjAzMjBfMjk3/MDAxNjQ3NzgwNzU0MTE5.OOQRa6ZEvKpt-Y7nuzGSeq8Qyt6Z5zxTbWDA3U-24kYg.-Q_K1W9UiCn5rn37PlPwZlgwm2jmbduqRnXO2CrKuA0g.JPEG.swishswalla/IMG_5927.JPG?type=w800",
    price: 0,
    location: "",
  });

  const ADD_PRODUCT = gql`
    mutation AddProduct(
      $title: String
      $imageUrl: String
      $price: Int
      $location: String
    ) {
      addProduct(
        title: $title
        imageUrl: $imageUrl
        price: $price
        location: $location
      ) {
        id
        title
        imageUrl
        price
        location
        uploadDate
      }
    }
  `;

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    mutationFn({ variables: values });
    navigate("/");
  };

  const [mutationFn, { loading, data, error }] = useMutation(ADD_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Header>
        <CloseBtn>
          <img src="src/assets/icon_close.svg" />
        </CloseBtn>
        <H1>내 물건 팔기</H1>
        <DraftBtn type="button">임시 저장</DraftBtn>
      </Header>
      <ImgBtn type="file" />
      <InputWrapper>
        <Label>제목</Label>
        <Input
          placeholder="제목"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>거래 방식</Label>
        <RadioWrapper>
          <RadioInput type="radio" id="판매하기" />
          <RadioLabel htmlFor="판매하기">판매하기</RadioLabel>
          <RadioInput type="radio" id="나눔하기" />
          <RadioLabel htmlFor="나눔하기">나눔하기</RadioLabel>
        </RadioWrapper>
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="&#8361; 가격을 입력해주세요."
          onChange={(e) => setValues({ ...values, price: +e.target.value })}
        />
        <CheckWrapper>
          <CheckInput type="checkbox" id="가격제안받기" />
          <CheckLabel htmlFor="가격제안받기">가격 제안 받기</CheckLabel>
        </CheckWrapper>
      </InputWrapper>
      <InputWrapper>
        <Label>자세한 설명</Label>
        <TextArea
          placeholder={`철산동에 올릴 게시글 내용을 작성해 주세요. (판매 금지 물품은 게시가 제한될 수 있어요.)\n\n신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국 인터넷진흥원과 함께 해요.`}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>거래 희망 장소</Label>
        <Input
          placeholder="위치 추가"
          onChange={(e) => setValues({ ...values, location: e.target.value })}
        />
      </InputWrapper>
      <Footer>
        <Button type="submit">작성 완료</Button>
      </Footer>
    </Wrapper>
  );
};

export default AddPage;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  padding: 0px 16px 163px 16px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 15px 15px 24px;
`;

const CloseBtn = styled.i`
  width: 57px;
  height: 19px;
  line-height: 19px;

  & > img {
    width: 19px;
    height: 19px;
  }
`;

const H1 = styled.h1`
  font-size: 17px;
  font-weight: bold;
`;

const DraftBtn = styled.button`
  font-size: 15px;
  color: #d1d3d8;
  border: none;
  background-color: transparent;
`;

const ImgBtn = styled.input`
  width: 64px;
  height: 64px;
  background-image: url("src/assets/img_button.png");
  color: white;

  &::file-selector-button {
    display: none;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: bold;
`;

const Input = styled.input`
  border: 1px solid #d1d3d8;
  border-radius: 5px;
  padding: 16px 14px;
`;

const RadioWrapper = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;
const RadioLabel = styled.label`
  padding: 12px 14px;
  border-radius: 20px;
  background-color: black;
  color: white;
  font-size: 13px;
`;
const RadioInput = styled.input`
  display: none;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CheckInput = styled.input`
  width: 22px;
  height: 22px;
  border: 1px solid #d1d3d8;
  border-radius: 5px;
`;

const CheckLabel = styled.label`
  font-size: 13px;
`;

const TextArea = styled.textarea`
  height: 159px;
  border: 1px solid #d1d3d8;
  border-radius: 5px;
  padding: 15px;
  font-size: 15px;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100vw;
  margin-left: -16px;
  z-index: 1;
  background-color: white;
  padding: 15px 15px 40px 15px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  height: 55px;
  width: 360px;
  background-color: #ff6f0f;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
`;
