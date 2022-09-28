import React from "react";
import styled from "styled-components";
import Character from "./Character";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
     
    const getCharacters = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/characters/1`);
        
        setCharacters(res.data.results);
      } catch (err) {}
    };
    getCharacters();
  },[]);

  return (
    <Container>
      {console.log(characters)}
      {characters.map((item, i) => (
        <Character item={item} key={i} />

        ))}
    </Container>
  );
};

export default Characters;
