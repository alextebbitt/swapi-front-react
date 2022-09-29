import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Character from "./Character";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;

 
`;
const SearchDiv = styled.div`

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
const [data, setData] = useState("");
console.log("data is", data)

useEffect(() => {
  const fetchCharacters = async () => {
    const res = await axios.get(`http://localhost:8080/search/${query}`);
    console.log("query", query)
    setData(res?.data?.results);
    console.log("res.data is", res?.data?.results)
  };
  if (query.length === 0 || query.length > 2) fetchCharacters()
}, [query])
const character = data?.map((item, i) => <Character item={item} key={i} />);

  return (
    <>
      <Container>
        <Left>EN</Left>
        <Center>Star Wars</Center>
        <Right>
          <SearchContainer>
            <Input
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            ></Input>
            <SearchIcon style={{ color: "grey", fontSize: 16 }}></SearchIcon>
          </SearchContainer>
        </Right>
      </Container>
      <SearchDiv>
        {/* {data.map((item, i) => <Character item={item} key={i} />
        );
      } */}
        {character}
      </SearchDiv>
    </>
  );
};

export default Header;
