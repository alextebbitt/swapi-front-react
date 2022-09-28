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
const Characters = (item) => {
  const [characters, setCharacters] = useState([]);
  console.log("before use effect");

  useEffect(() => {
     console.log("useeffect");
    const getCharacters = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/characters/1`);
        console.log("characters out of getCharacters function is", res);
        setCharacters(res.data.results);
      } catch (err) {}
    };
    getCharacters();
  },[]);

  return (
    <Container>
      {characters.map((item) => (
        <Character item={item} key={item} />,
        console.log("item in container", item.name)
        ))}
    </Container>
  );
};

export default Characters;
