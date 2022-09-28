import React from "react";
import styled from "styled-components";
import Character from "./Character";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  height: 60px;
  
  justify-content: space-between;
`;
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/characters/1`);

      setCharacters(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  const characterOutside = characters.map((item, i) => (
    <Character item={item} key={i} />

  ));
  return (
    <Container>
      {console.log("characters outside", characterOutside)}
      {characterOutside}
    </Container>
  );
};

export default Characters;
