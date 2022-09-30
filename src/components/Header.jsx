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
  padding-bottom: 10px;
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
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      if (!query) {
        return;
      }
      const res = await axios.get(`http://localhost:8080/search/${query}`);
      setData(res?.data);
    };
    fetchCharacters();
  }, [query]);

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
        {data.length !== 10
          ? data?.map((item, i) => (
              <div name="id">
                <Character item={item} key={i} />
              </div>
            ))
          : null}
      </SearchDiv>
    </>
  );
};

export default Header;
