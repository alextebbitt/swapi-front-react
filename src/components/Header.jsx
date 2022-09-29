import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;

 
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
const SearchContainer = styled.div`
border: 1px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding 5px;`;

const Input = styled.input`
  border: none;
`;

const Header = () => {
const [query, setQuery] = useState("")

useEffect(() => {
  const fetchCharacters = async () => {
    const res = await axios.get("http://localhost:8080/search")
  }
})

  return (
    <Container>
      <Left>EN</Left>
      <Center>Star Wars</Center>
      <Right>
        <SearchContainer>
          <Input placeholder="Search"></Input>
          <SearchIcon style={{ color: "grey", fontSize: 16 }}
          ></SearchIcon>
        </SearchContainer>
      </Right>
    </Container>
  );
};

export default Header;
