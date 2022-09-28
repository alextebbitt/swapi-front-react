import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;


const Character = (item) => {
    console.log("this is item", item)
  return (
    
    <Container>
      <span>{item.name}</span>,
      {console.log("item name", item.name)}
      <label>test</label>
    </Container>
  );
};

export default Character;
