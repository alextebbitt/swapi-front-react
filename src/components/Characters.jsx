import React from "react";
import styled from "styled-components";
import Character from "./Character";
import { useEffect, useState } from "react";
import axios from "axios";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Container = styled.div`
  display: grid;
`;

const ContainerArrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Characters = () => {
  let pageNumber = 1;
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/characters/${pageNumber}`
      );
      setCharacters(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEvent = (direction) => {
    if (direction === "right" && pageNumber < 9) {
      pageNumber++;
      getCharacters();
    } else {
      if (direction === "left" && pageNumber > 1) {
        pageNumber--;
        getCharacters();
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    getCharacters();
    console.log(pageNumber);
  }, []);

  return (
    <>
      <Container>
        {characters.map((item, i) => (
          <Character item={item} key={i} />
        ))}
      </Container>

      <ContainerArrows direction="left" onClick={() => handleEvent("left")}>
        <ChevronLeftIcon
          style={{ color: "white", fontSize: 100 }}
        ></ChevronLeftIcon>

        <ContainerArrows direction="right" onClick={() => handleEvent("right")}>
          <ChevronRightIcon
            style={{ color: "white", fontSize: 100 }}
          ></ChevronRightIcon>
        </ContainerArrows>
      </ContainerArrows>
    </>
  );
};

export default Characters;
