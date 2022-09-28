import React from "react";
import styled from "styled-components";


const Container = styled.div`
font-size: 30px;
`;
const Label = styled.div`
  font-size: 30px;
`;

const Character = (item) => {
     console.log("this is itemss", item.item)
  return (
    
    <Container>
      <Label>
        {item.name}
      test
      </Label>
        
      
    </Container>
  );
};

export default Character;
