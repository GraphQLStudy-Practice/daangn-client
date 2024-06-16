import styled from "@emotion/styled";

const AddPage = () => {
  return (
    <Container>
      <Header>내 물건 팔기</Header>
      <PhotoButton type="file"></PhotoButton>
      <Title>제목</Title>
      <Input type="text" />
    </Container>
  );
};

export default AddPage;

const Header = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  padding: 10px;

  border: 1px solid black;
`;
const PhotoButton = styled.input`
  width: 70px;
  height: 70px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const Title = styled.label`
  color: black;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
`;
