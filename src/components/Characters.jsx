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
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const getCharacters = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/characters/${page}`
      );
      setCharacters(res.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEvent = (direction) => {
    if (direction === "right" && page < 9) {
      setPage(page + 1);
    } else if (direction === "left" && page > 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  return (
    <>
      <Container>
        {characters.map((item, i) => (
          <Character item={item} key={i} />
        ))}
      </Container>

      <ContainerArrows >
        <ChevronLeftIcon direction="left" onClick={() => handleEvent("left")}
          style={{ color: "white", fontSize: 100 }}
        ></ChevronLeftIcon>

        <ChevronRightIcon direction="right" onClick={() => handleEvent("right")}
          style={{ color: "white", fontSize: 100 }}
        ></ChevronRightIcon>
      </ContainerArrows>
    </>
  );
};

export default Characters;