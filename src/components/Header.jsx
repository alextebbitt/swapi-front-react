import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;

  background-color: gray;
`;

const Left = styled.div`
  margin: 10px 30px;
`;
const Center = styled.div`
  
  font-size: 40px;
`;
const Right = styled.div`
  margin: 10px 30px;
`;

const Header = () => {
  return (
    <Container>
      <Left>left</Left>
      <Center>Star Wars</Center>
      <Right> searchbar</Right>
    </Container>
  );
};

export default Header;
